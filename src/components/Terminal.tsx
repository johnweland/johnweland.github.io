// @ts-nocheck
import { Fragment } from 'react'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

const Terminal = ({ children, ...props }) => {
  const codeLanguage = props.language
  const code = children

  const tabs = [
    { name: props.name, isActive: true },
    { name: props.file, isActive: false },
  ]
  return (
    <>
      <div className="relative my-8">
        <div className="inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:linear-gradient(white,white,transparent)]"></div>
        <div className="absolute -top-64 -right-64"></div>
        <div className="absolute -bottom-40 -right-44"></div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-300 via-emerald-300/70 to-emerald-300 opacity-50 blur-lg"></div>
        <div className="ring-emerald/10 relative rounded-2xl bg-neutral-900/80 ring-1 backdrop-blur">
          <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-emerald-300/10 via-emerald-300/70 to-emerald-300/10" />
          <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-emerald-400/10 via-emerald-400 to-emerald-400/10" />
          <div className="pl-4 pt-4">
            <svg
              aria-hidden="true"
              className="h-2.5 w-auto stroke-neutral-500"
              fill="none"
            >
              <circle cx="5" cy="5" r="4.5" fill="#ef4444" />
              <circle cx="21" cy="5" r="4.5" fill="#facc15" />
              <circle cx="37" cy="5" r="4.5" fill="#22c55e" />
            </svg>
            <div className="mt-4 flex space-x-2 text-xs">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={clsx('flex h-6 rounded-full', {
                    'bg-gradient-to-r from-emerald-400/30 via-emerald-400 to-emerald-400/30 p-px font-medium text-emerald-300':
                      tab.isActive,
                    'text-neutral-500': !tab.isActive,
                  })}
                >
                  <div
                    className={clsx('flex items-center rounded-full px-2.5', {
                      'bg-neutral-800': tab.isActive,
                    })}
                  >
                    {tab.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start px-1 text-sm lg:text-xs">
              <div
                aria-hidden="true"
                className="select-none border-r border-neutral-500 pr-4 font-mono text-neutral-500"
              >
                {Array.from({
                  length: code.split('\n').length,
                }).map((_, index) => (
                  <Fragment key={index}>
                    {(index + 1).toString().padStart(2, '0')}
                    <br />
                  </Fragment>
                ))}
              </div>
              <Highlight
                {...defaultProps}
                code={code}
                language={codeLanguage}
                theme={undefined}
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre
                    className={clsx(className, 'flex overflow-x-auto pb-6')}
                    style={style}
                  >
                    <code className="px-4">
                      {tokens.map((line, index) => (
                        <div key={index} {...getLineProps({ line })}>
                          {line.map((token, index) => (
                            <span key={index} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </code>
                  </pre>
                )}
              </Highlight>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terminal
