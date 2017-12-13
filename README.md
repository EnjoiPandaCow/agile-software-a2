# Assignment 2 - Automated development process.

Name: Christopher John O'Sullivan

Student No.:  20058550

## Overview.

Shyft is an application that facilitates on the way delivery for road users targeted at the second hand market. In this iteration of Shyft I have 
built a MEAN Stack CRUD Application and tested it using testing frameworks such as Mocha, Chai and Selenium Web Driver.

## Environment.

To use this application some tools will need to be installed these tools are listed below:
```
MongoDB - Firstly run mongod in one terminal window and secondly mongo in another.
NPM Install - You must run npm install after downloaing this project to install all node modules. 
Node - Version than 4.0
```
Adittonaly I have shown sample documents from the database in the extras section below. 

## Build automation.

The terminal commands need to build, test and run this application locally are: 
```
npm run back-test
npm run start 
npm run front-test
npm run build
npm start 
```

Alternately after the testing phase you could also run the production build commands which are:
```
npm run build-prod
npm run start-prod
```

## Acceptance Testing.

At this current stage of development there are 35 acceptance tests on this application below I have shown screenshots of each page 
and the out put of each acceptance test. Finally at the end of this section I have shown the routes to theses tests.

#### Home Page Screenshot & Test Results 
![home](https://user-images.githubusercontent.com/15814222/33926826-8d572e42-dfd7-11e7-8bf3-d8e1491a55bc.PNG)
![home-test](https://user-images.githubusercontent.com/15814222/33926891-e1656df0-dfd7-11e7-9c9d-43fdedec03f9.PNG)

#### Add Job Screenshot & Test Results 
![addjob](https://user-images.githubusercontent.com/15814222/33926946-1b2c16a6-dfd8-11e7-9cb1-6442096be2d6.PNG)
![addjobtest](https://user-images.githubusercontent.com/15814222/33927167-2177a376-dfd9-11e7-8599-b34f8ba4537d.PNG)

#### View Jobs Screenshot & Test Results 
![viewjobspage](https://user-images.githubusercontent.com/15814222/33927211-4e098d3c-dfd9-11e7-930a-abec164646fa.PNG)
![searchdeliverytest](https://user-images.githubusercontent.com/15814222/33927239-64fb91a2-dfd9-11e7-961d-2b936ad9e977.PNG)

#### Update Job Screenshot & Test Results 
![updatejobs](https://user-images.githubusercontent.com/15814222/33927365-e7e99924-dfd9-11e7-90f6-b4a5f6570204.PNG)
![ujpt](https://user-images.githubusercontent.com/15814222/33927371-eadbef10-dfd9-11e7-9e54-cc968d3d39e6.PNG)

#### Add User Screenshot & Test Results 
![adduser](https://user-images.githubusercontent.com/15814222/33927442-4690d172-dfda-11e7-8b1f-cff1980ac03a.PNG)
![addusertest](https://user-images.githubusercontent.com/15814222/33927444-4916bb1e-dfda-11e7-9f1a-6ab4123ef656.PNG)

#### View Users Screenshot & Test Results 
![viewusers](https://user-images.githubusercontent.com/15814222/33927476-672f7e2e-dfda-11e7-8125-05a39acb3a08.PNG)
![vupt](https://user-images.githubusercontent.com/15814222/33927478-6928fa02-dfda-11e7-9ef3-f8a8ac2eca90.PNG)

#### Update User Screenshot & Test Results 
![updateuser](https://user-images.githubusercontent.com/15814222/33927516-88361cd6-dfda-11e7-9742-95b04a93b4f6.PNG)
![update-user-test](https://user-images.githubusercontent.com/15814222/33927518-8d3e8d08-dfda-11e7-9cf3-d9575cb7c9a2.PNG)

#### List of Test File Routes 
* test/acceptance/addUserPage-Test.js
* test/acceptance/homePage-Test.js
* test/acceptance/searchDeliveryPage-Test.js
* test/acceptance/sendItemPage-Test.js
* test/acceptance/updateJobPage-Test.js
* test/acceptance/updateUserPage-Test.js
* test/acceptance/viewUserPage-Test.js
            

## Continuous Integration.

The URL for this application on Travis is:  https://travis-ci.org/EnjoiPandaCow/agile-software-a2

## Automated Deployment.

No automated deployment at this time.   

## Extra features.

#### User Schema
```
fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    county: {
        type: String,
        required: true
    }
 ```
    
#### Sample User Documen
```
    {
        "_id" : ObjectId("59f6f0b99bd9dc7f544d7dac"),
        "county" : "Kilkenny",
        "town" : "Mooncoin",
        "street" : "Polerone",
        "password" : "Password1",
        "contactNo" : "0831555552",
        "email" : "cjosullivan@hotmail.co.uk",
        "lName" : "O'Sullivan",
        "fName" : "CJ",
        
    }
```
    
#### Job Schema 
```
     title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: true
        },
        cStreet: {
          type: String,
          required: true
        },
        cTown: {
            type: String,
            required: true
        },
        cCounty: {
            type: String,
            required: true
        },
        cCoordinates: {
            type: [Number],
            index: '2dsphere'
        },
        dStreet: {
            type: String,
            required: true
        },
        dTown: {
            type: String,
            required: true
        },
        dCounty: {
            type: String,
            required: true
        },
        dCoordinates: {
            type: [Number],
            index: '2dsphere'
        },
        dTime: {
            type: Date,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        photos: {
            type: [String],
            required: false
        },
        userId: {
            type: String,
            required: true
        }
```

#### Sample Job Document
```
    {
        "_id" : ObjectId("59f1e69dd0ae514f10a24a82"),
        "userId" : "59f9fb109bd9dc7f544cadfa",
        "price" : 100.14,
        "dTime" : ISODate("2014-09-11T14:12:00.000Z"),
        "dCoordinates" : [ 
            53.023793, 
            -9.30881
        ],
        "dCounty" : "Clare",
        "dTown" : "Doolin",
        "dStreet" : "Roadford Doolin Clare",
        "cCoordinates" : [ 
            53.282694, 
            -6.211145
        ],
        "cCounty" : "Dublin",
        "cTown" : "Stillorgan",
        "cStreet" : "122 Stillorgan Wood",
        "size" : "Fits in a Van",
        "desc" : "Sold my couch online, no way to transport it",
        "title" : "Couch",
        "photos" : [ 
            "/photos/job/0002/4.jpg", 
            "/photos/job/0003/5.jpg", 
            "/photos/job/0004/6.jpg"
        ],
    }
```
