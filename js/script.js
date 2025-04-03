// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

//Function that gets the base and height value, calculates the area and inserts text into the <div> tag
    function calcArea() {
        let base1 = document.getElementById("base").value;
        let height1 = document.getElementById("height").value;
        area = 0.5*base1*height1
        document.getElementById("answer").innerHTML = "Answer:" + area +" cm";
}