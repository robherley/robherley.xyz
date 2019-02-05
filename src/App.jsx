import React from 'react';
import { hot } from 'react-hot-loader';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Project from './components/Project';
import './components/common/Icons';

const App = () => (
  <>
    <Nav />
    <Hero />
    <main>
      <section className="header">
        <Intro />
      </section>
      <section className="projects">
        <h1>Here&#39;s some of my work:</h1>
        <Project
          title="Overcast"
          tech={[
            'IBM cloud',
            'docker',
            'node',
            'react',
            'redux',
            'redis',
            'postgres'
          ]}
          color="#83BCFF"
          body={() => (
            <>
              An analytics-centric web dashboard for IBM Cloud Dedicated.
              Utilizing React and Redux, the front-end communicates with the
              back-end Express server that collects information from a Postgres
              DB as well as other sources within a Kubernetes cluster. The
              collected data is displayed with various charts in addition to
              other visual components to give insightful performance metrics,
              service instance utilization and overall adoption of the platform.
            </>
          )}
        />
        <Project
          title="Kommodore"
          tech={[
            'IBM cloud',
            'kubernetes',
            'node',
            'react',
            'redux',
            'mongo',
            'docker'
          ]}
          color="#EF476F"
          body={() => (
            <>
              Kommodore provides an intuitive interface for IBM Cloud
              administrators to monitor the usage of provisioned Kubernetes
              clusters. Admins and cluster's owners are able to collect
              performance metrics including memory usage, CPU performance, and
              storage allocation in order to optimize their clusters. With this
              tool, administrators can monitor hundreds of Kubernetes clusters
              and reduce unnecessary allocations and save internal resources.
            </>
          )}
        />
        <Project
          title="Stratus"
          tech={['node', 'react', 'redux', 'aws', 'mongo']}
          color="#EEC643"
          link="https://github.com/robherley/cs546-cloud-markdown"
          body={() => (
            <>
              Stratus is an online Markdown editor web service. The concept of
              the site is to allow users to log in and view/edit their Markdown
              files. A MongoDB database is used to store users and the mappings
              to which files they own, of which are stored in an Amazon S3
              bucket. In addition, a PDF generator allows users to download
              their files offline as a PDF.
            </>
          )}
        />
        <Project
          title="Y.A.M.S."
          tech={[
            'typescript',
            'node',
            'socket.IO',
            'electron',
            'react',
            'redux',
            'aws',
            'mongo',
            'redis'
          ]}
          color="#FCAC74"
          link="https://github.com/gluaxspeed/cs554-yams-backend"
          body={() => (
            <>
              YAMS, otherwise known as Yet Another Messaging Service, is a
              Slack-like clone written in Typescript and React, which uses
              Electron for the front-end cross-platform client. The client uses
              Socket.IO for message communication, with redis as the adapter to
              allow for ease in scalability. The server distributes data between
              the clients, stores chat logs within MongoDB, and uploads user
              content like pictures to Amazon S3.
            </>
          )}
        />
        <Project
          title="Scramble"
          tech={['node', 'react', 'socket.IO']}
          color="#17BEBB"
          link="https://github.com/robherley/scramble"
          body={() => (
            <>
              Scramble is a collection of fast-paced multiplayer mini-games
              inspired by classics like Wario Ware and Mario Party series. The
              server pairs clients into Socket.IO Rooms and starts a random
              mini-game between the two clients. The back-end is built in
              Express.js, which watches for various socket emitters from each of
              the clients, and acts accordingly. As for the front-end, we used
              React.js to dynamically update the DOM when receiving information
              from the sockets and user input.
            </>
          )}
        />
      </section>
    </main>
  </>
);

export default hot(module)(App);
