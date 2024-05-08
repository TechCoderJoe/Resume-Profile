# Resume-Profile

This project showcases a simple resume template built using Vite and a React framework. The chosen JavaScript variant provides additional customization options.

The website itself serves as the author's resume, deployed as a Git page for easy access and sharing. This modern approach leverages the speed and efficiency of Vite while utilizing the power and flexibility of React.

## Prerequisits
Node.js and npm.

Download and install Node.js from the official website (https://nodejs.org/) to get npm, the package manager.

Verify the installation by opening a terminal or command prompt and running `node -v` and `npm -v`. You should see the installed versions.

## Installation
To clone the repository
```
git clone https://github.com/TechCoderJoe/Resume-Profile
```

Navigate to the project directory
```
cd Resume-Profile
```

Install dependencies
```
npm install
```

## Usage

### Pages to edit
**index.html**
Upload new favicon.png in the public/images location or remove `<link rel="icon" type="image/png" href="images/favicon.png" />`

Replace the `<title></title>`

Replace the content in the `<meta name="description" content="" />`

**src/components/About.jsx**
Update and/or add items to the socialIcons array. Example:
```
{
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/username/",
    icon: faLinkedinIn
}
```
The icons are imported from fontawesome. To import other branded icons modifiy the following code:
```
import { faLinkedinIn, faGithub  } from '@fortawesome/free-brands-svg-icons'
```

Example to add facebook:
```
import { faLinkedinIn, faGithub, faFacebook  } from '@fortawesome/free-brands-svg-icons'
```

For additional icons and documentation visit https://docs.fontawesome.com/web/use-with/react/(https://docs.fontawesome.com/web/use-with/react/)

Update the HTML sections for name, email, and the paragraphs.


**src/components/Education.jsx**
Update and/or add items to the educationInfo array. Example:
```
{
    schoolname: 'School Name Here',
    degree:'Degree Here',
    major: 'Major Here',
    minor: 'Minor Here (Not Requried)',
    graddate: 'Graduation Date Here'
}
```

**src/components/Experience.jsx**
Update and/or add items to the experienceInfo array. Example:
```
{
    companyname: 'Company Name Here',
    jobtitle:'Job Title Here',
    jobdesc: 'Job Description Here',
    servicedate: 'Service Date Here',
    programlanguages: ['C#', 'CSS', 'HTML', 'JavaScript'],
    frameworks: ['Bootstrap', 'jQuery']
}
```

**src/components/Skills.jsx**
Update and/or add items to the skillsInfo array. Example:
```
{
    title: 'Languages',
    list:['C#','CSS', 'HTML', 'JavaScript', 'MS SQL', 'MySQL', 'PHP', 'VB']
}
```


### Development server
```
npm run dev
```

### Build Production

**Create a build local to copy**

```
npm run build
```
The files will be in the dist folder to upload to a hosting enviorment.

**Upload as a GitHub Page**
Modify the `base` value in the vite.config.js file. Example:
```
base: '/<repo>/'
```

Modify the `homepage` value in the package.json file. Example:
```
"homepage": "https://<username>.github.io/<repo>/",
```

Add, commit, and push all the changes to the master branch of the repo.

Execute the following command to publish
```
npm run deploy
```