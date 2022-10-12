import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Terminal from "./terminal";

const social = [
  {
    name: "Twitter",
    href: "https://twitter.com/j_weland",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/johnweland",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/johnweland/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 mb-24">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover shadow-inner scale-x-[-1]"
          src="https://cdn.pixabay.com/photo/2016/10/15/13/40/laptop-1742462_1280.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-emerald-600 mix-blend-multiply shadow-inner" />
      </div>
      <div className="relative pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14 z-10">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mx-auto p-4 text-center lg:px-0 flex-col justify-center items-center">
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="">John</span>
                <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text">
                  {" "}
                  Weland
                </span>
              </h1>
              <p className="mt-3 text-base font-bold text-neutral-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Engineer, Cloud Architect, Entrepreneur
              </p>
              <div className="flex justify-center space-x-3 mt-10 sm:mt-12">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-100 hover:text-gray-200 p-2"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-10 w-10" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="p-4 lg:max-w-none lg:px-0 flex-col justify-center items-center">
              <Terminal
                className="py-24 blahblah"
                language="javascript"
                name="cdk"
                file="lib/notify-stack.ts"
              >
                {`import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class NotifyStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const queue = new sqs.Queue(this, 'NotifyQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });
    const topic = new sns.Topic(this, 'NotifyTopic');
    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}`}
              </Terminal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
