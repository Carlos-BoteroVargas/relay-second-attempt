
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://drive.google.com/file/d/1eJwq8XWDOTErlVimulxARN8VSqYq6IBz/view?usp=sharing">
    <img src="public/PeachLogo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">README - Relay 2nd Try</h3>

  <p align="center">
    It is working finally!
    <br />
    (At least the fetching does work)
    <br />
    <a href="https://github.com/Carlos-BoteroVargas/relay-second-attempt.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://localhost:3000">View Demo</a>
    ·
    <a href="#s">Report Bug</a>
    ·
    <a href="#">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Our first hands on attempt to understand Relay. Built with the generous help of LinkedIn's Tutorial <a href="#">Step-By-Step</a>

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React](https://reactjs.org/)
* [Relay](https://relay.dev/)
* [GraphQL](https://graphql.org/)



<!-- GETTING STARTED -->
## Getting Started

* Fork and Clone the Repo:
   ```sh
   git clone https://github.com/Carlos-BoteroVargas/relay-second-attempt.git
   ```

### Prerequisites

Install the dpendencies:
* :: npm i ::
  ```sh
  npm install
  ```
* install [watchman](https://facebook.github.io/watchman/docs/install.html) in your machine
  ```sh
  Follow the isntructions on the link above &&
  'npm i watchamn'
  ```

### Installation

1. Update the Schema:
   ```sh
   npm run update-schema
   ```
2. Fire up Relay
   ```sh
   npm run relay
   ```
   - This might throw an error associated with Watchman, but it won't necessarily affect your app
3. Run the App
   ```sh
   npm start
   ```



<!-- USAGE EXAMPLES -->
## Usage

You will end up with to servers, one to view/understand GraphQL services, the second will render your App:

1. Production/GraphQL server:
    * [http://localhost:8080/](http://localhost:8080/)
   
2. Your App:
    * [http://localhost:3000/](http://localhost:3000/)

_For more examples, please refer to the [Documentation](https://relay.dev/)_

## THANK YOU!