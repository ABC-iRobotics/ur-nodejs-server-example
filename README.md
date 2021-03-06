# ur-nodejs-server-example

## Overview
Simple Node.js example to send a command or a program an Universal Robot via socket.

**NOTE**: It is an experimental software. Do not use this in production systems!

THE SOFTWARE IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL, BUT WITHOUT ANY WARRANTY. IT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE IS WITH YOU. SHOULD THE SOFTWARE PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

## TOC
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Example usage](#example-usage)
5. [Bugs, feature requests, etc](#bugs-feature-requests-etc)

## Requirements
Install Node.js.

## Installation
1. Clone the repository.
2. Run the `npm i` command in the cloned repository folder

## Configuration
1. Copy the urscript folder contents to the robot controller
2. Set the node server IP address in the `socket-send-waypoints` robot program
2. Set the correct values (integers, coordinates) in the `socket.write` lines

## Example usage
1. Open a terminal and run the `node index.js` command in the cloned repository folder
2. Run the `socket-send-waypoints` program on the robot controller.

## Acknowledgement
We acknowledge the financial support of this work by the Hungarian State and the European Union under the  EFOP-3.6.1-16-2016-00010 project.

## Bugs, feature requests, etc
Please use the [GitHub issue tracker][].

[GitHub issue tracker]: https://github.com/ABC-iRobotics/fanuc-webcontrol/issues