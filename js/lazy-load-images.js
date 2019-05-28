'use strict';

class LazyLoadImages {

  static get SUPPORTS_INTERSECTION_OBSERVER () {
    return ('IntersectionObserver' in window);
  }

  static get HANDLED_CLASS () {
    return 'js-lazy-image--handled';
  }

  static get THRESHOLD () {
    return 0.01;
  }

  static init () {
    if (this._instance) {
      this._instance._disconnect();
    }

    this._count = 0;
    this._instance = new LazyLoadImages();
  }

  constructor () {
    const images = document.querySelectorAll('.js-lazy-image');
    const config = {
      // If the image gets within 50px in the Y axis, start the download.
      rootMargin: '50px 0px',
      threshold: LazyLoadImages.THRESHOLD
    };

    if (!LazyLoadImages.SUPPORTS_INTERSECTION_OBSERVER) {
      this._loadImagesImmediately(images);
      return;
    }

    this._count = images.length;
    this._onIntersection = this._onIntersection.bind(this);
    this._observer = new IntersectionObserver(this._onIntersection, config);
    images.forEach(image => {
      if (image.classList.contains(LazyLoadImages.HANDLED_CLASS)) {
        return;
      }

      this._observer.observe(image);
    });
  }

  _disconnect () {
    if (!this._observer) {
      return;
    }

    this._observer.disconnect();
  }

  _onIntersection (entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio < 0) {
        return;
      }

      this._count--;
      this._observer.unobserve(entry.target);
      this._preloadImage(entry.target);
    });

    if (this._count > 0) {
      return;
    }

    this._observer.disconnect();
  }

  _preloadImage (image) {
    const src = image.dataset.src;
    if (!src) {
      return;
    }

    return this._pre(src).then(_ => this._applyImage(image, src));
  }
  _pre (url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  };

  _loadImagesImmediately (images) {
    Array.from(images).forEach(image => this._preloadImage(image));
  }

  _applyImage (img, src) {
    const el = img.querySelector('.js-lazy-image-content');
    if (!el) {
      return;
    }

    // Prevent this from being lazy loaded a second time.
    img.classList.add(LazyLoadImages.HANDLED_CLASS);
    el.style.backgroundImage = `url(${src})`;
    el.classList.add('fade-in');
  }
}

export default LazyLoadImages;