import ttt2 from "../assets/Carousel/ttt2.png";
import btd2 from "../assets/Carousel/btd2.png";
import tt2 from "../assets/Carousel/tt2.png";
import tt3 from "../assets/Carousel/tt3.png";
import btd1 from "../assets/Carousel/btd1.jpeg";
import ttt1 from "../assets/Carousel/ttt1.png";
import tt1 from "../assets/Carousel/tt1.png";
import mlt1 from "../assets/Carousel/mlt1.png";
import mlt2 from "../assets/Carousel/mlt2.png";

import mountainImg from "../assets/About/mountain.jpeg";
import dc from "../assets/About/dc.jpeg";
import friend from "../assets/About/friend.jpg";
import monkey from "../assets/About/monkey.jpg";
import ohio from "../assets/About/ohio.jpg";
import snow from "../assets/About/snow.jpg";
import view from "../assets/About/view.png";

export const tttImages = [ttt1, ttt2];
export const btdImages = [btd1, btd2];
export const ttImages = [tt1, tt2, tt3];
export const mltImages = [mlt1, mlt2];

export const travelImages = [mountainImg, dc, friend, monkey, ohio, snow, view];

export const btdText = (
  <>
    The Braille Teaching Device was made during the Fundamentals of Engineering
    II class at The Ohio State University in the spring of 2022. The device is
    made out of an Arduino Nano, a mini-MP3 player, a speaker, push-buttons, and
    3D printed parts.
    <br />
    <br />
    The user spins the three rotating components to create a braille letter and
    then presses them forward. The device then audibly announces the letter
    created by the user. In an alternate mode, toggled via a button on the back,
    the device prompts the user to input a letter and then announces whether the
    letter they submitted is correct.
    <br />
    <br />
    Most of the electronic components were provided by the university, but the
    conception, design, 3D printing, wiring, soldering, coding, and assembly
    were all done by the students.
    <br />
    <br />
    This product works by reading the dots on the back side of the spinning
    components. By design, the “letter” on the back is the inverse of what can
    be seen on the front. Any number of the six push buttons can be triggered
    depending on how many dots are present on the back side. The location of
    these dots is then put through an algorithm to detect the letter.
    <br />
    <br />
    The Braille Teaching Device was given the second-place award among all
    projects created by students taking this class.
  </>
);
export const tttText = (
  <>
    TikTok Tutor is a progressive web app that was created during the Ohio State
    Hackathon, HackOhio, in October of 2023. TikTok Tutor is an educational
    social media post generator.
    <br />
    <br />
    The user inputs any topic into the dedicated input and then the program
    prompts ChatGPT for funny, interesting, and educational messages, relating
    to the topic, that mimic Reddit, Twitter, or 4Chan. Then the program creates
    a “post” that looks like a social media post. TikTok Tutor continuously
    generates posts so that the user can always scroll down to see another post
    about the topic.
    <br />
    <br />
    The project was coded in Python and uses CSS, Flask, and ChatGPT’s API. The
    members working on front-end spent much time making each individual “post”
    look similar to their social media counterpart. Time was also spent creating
    prompts for ChatGPT so that its output is educational and mimics social
    media.
    <br />
    <br />
    This program was created to make social media less pointless and make
    education more fun and accessible.
  </>
);

export const jdText = (
  <>
    This project was created in October 2022 during the Ohio State University’s
    Hackathon. The user uploads a video of a dance or exercise that they wish to
    replicate. Then the application uses a camera to give feedback based on how
    similar the body movements are between the two video sources.
    <br />
    <br />
    Just Dance - TikTok Edition uses the TensorFlow pose estimation API to get
    the locations of specific body parts on both the provided video and the
    user. The application then uses a handful of algorithms to determine an
    accuracy score. The application then tells the user if their movements are
    ok, good, great, or perfect based on the score.
    <br />
    <br />
    This application was created in less than 24 hours as a fun project for
    three engineering students to learn and showcase their coding skills.
  </>
);

export const mltText = (
  <>
    MATLAB Tetris was created as a project for the Fundamentals of Engineering I
    class at The Ohio State University in the fall of 2021. The university
    provided a simple game engine, but all other work was done by the students.
    <br />
    <br />
    The program has nearly 2000 lines of code and the gameplay is seamless and
    similar to the original Tetris game. This program includes a soundtrack,
    handmade graphics, an intriguing title screen, a score tracker, and an
    impressive AI opponent.
    <br />
    <br />
    The program also contains multiple game modes, including single-player,
    multiplayer, and single-player vs. AI.
    <br />
    <br />
    MATLAB Tetris was given the first place award among all projects created by
    students taking this class.
  </>
);
