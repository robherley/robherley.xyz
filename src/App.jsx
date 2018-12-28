import React from 'react';
import { hot } from 'react-hot-loader';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Intro from './components/Intro';
import SectionHead from './components/common/SectionHead';
import Project from './components/Project';
import './components/common/Icons';

const App = () => (
  <>
    <Nav />
    <Hero />
    <main className="grid">
      <Intro />
      <SectionHead
        icon="code"
        title="Programming Projects"
        body={() => (
          <>
            Here are some of the academic, work and personal projects I&#39;ve
            worked on in my short career as a student/developer. If you are
            interested in any of the source code, you can find most of it on my{' '}
            <a href="https://github.com/robherley">GitHub</a>.
          </>
        )}
      />
      <Project
        title="Overcast"
        tech={[
          'ibmcloud',
          'docker',
          'node',
          'react',
          'redux',
          'redis',
          'postgres'
        ]}
        body={() => (
          <>
            Overcast is a web dashboard for IBM Cloud Dedicated. Utilizing React
            and Redux, the front-end communicates with the back-end Express
            server that collects information from a Postgres DB as well as other
            sources within a Kubernetes cluster. The collected data is displayed
            with various charts in addition to other visual components to give
            insightful performance metrics.
          </>
        )}
      />
      <Project
        title="Kommodore"
        tech={[
          'ibmcloud',
          'kubernetes',
          'node',
          'react',
          'redux',
          'mongo',
          'docker'
        ]}
        body={() => (
          <>
            Kommodore provides an intuitive interface for IBM Cloud
            administrators to monitor the usage of provisioned Kubernetes
            clusters. Admins and cluster's owners are able to collect
            performance metrics including memory usage, CPU performance, and
            storage allocation in order to optimize their clusters. With this
            tool, administrators can monitor hundreds of Kubernetes clusters and
            reduce unnecessary allocations and save internal resources.
          </>
        )}
      />
      <Project
        title="Stratus"
        tech={['node', 'react', 'redux', 'aws', 'mongo']}
        body={() => (
          <>
            Stratus is an online Markdown editor web service. The concept of the
            site is to allow users to log in and view/edit their Markdown files.
            A MongoDB database is used to store users and the mappings to which
            files they own, of which are stored in an Amazon S3 bucket. In
            addition, a PDF generator allows users to download your files as a
            PDF.
          </>
        )}
      />
      <Project
        title="Y.A.M.S."
        tech={[
          'typescript',
          'node',
          'socketio',
          'electron',
          'react',
          'redux',
          'aws',
          'mongo',
          'redis'
        ]}
        body={() => (
          <>
            YAMS, otherwise known as Yet Another Messaging Service, is a
            Slack-like clone written in Typescript and React, which uses
            Electron for the front-end cross-platform client. The client uses
            socket.io for message communication, with redis as the adapter to
            allow for ease in scalability. The server distributes data between
            the clients, stores chat logs within MongoDB, and uploads user
            content like pictures to Amazon S3.
          </>
        )}
      />
      <Project
        title="Scramble"
        tech={['node', 'react', 'socketio']}
        body={() => (
          <>
            Scramble is a collection of fast-paced multiplayer mini-games
            inspired by classics like Wario Ware and Mario Party series. The
            server pairs clients into Socket.io Rooms and starts a random
            mini-game between the two clients. The back-end is built in
            Express.js, which watches for various socket emitters from each of
            the clients, and acts accordingly. As for the front-end, we used
            React.js to dynamically update the DOM when receiving information
            from the sockets and user input.
          </>
        )}
      />
    </main>
  </>
);

export default hot(module)(App);
