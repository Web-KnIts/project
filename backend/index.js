const express = require('express');
const cors = require('cors');
const generateResume = require('./controller/geminiResponse');
const app = express();


const structure = {
  "basics": {
    "name": "John Doe",
    "label": "Software Engineer",
    "email": "johndoe@example.com",
    "phone": "+1 555-123-4567",
    "location": {
      "city": "San Francisco",
      "region": "CA",
      "country": "USA"
    },
    "summary": "Results-driven software engineer with 5+ years of experience developing scalable web applications and working across the full stack."
  },
  "work": [
    {
      "company": "TechCorp Inc.",
      "position": "Senior Software Engineer",
      "startDate": "2022-01",
      "endDate": "Present",
      "summary": "Leading a team of developers in building enterprise-level web applications using Node.js, React, and AWS.",
      "highlights": [
        "Implemented microservices architecture to improve scalability",
        "Reduced deployment time by 40% through CI/CD automation"
      ]
    },
    {
      "company": "CodeWorks LLC",
      "position": "Software Engineer",
      "startDate": "2018-06",
      "endDate": "2021-12",
      "summary": "Contributed to the full stack development of e-commerce platforms and internal tools.",
      "highlights": [
        "Built reusable components in React, increasing code efficiency",
        "Collaborated with cross-functional teams to deliver 5+ projects on time"
      ]
    }
  ],
  "education": [
    {
      "institution": "University of California, Berkeley",
      "area": "Computer Science",
      "degree": "B.Sc.",
      "startDate": "2014-09",
      "endDate": "2018-05"
    }
  ],
  "skills": [
    {
      "name": "Programming Languages",
      "keywords": ["JavaScript", "Python", "Java"]
    },
    {
      "name": "Frameworks & Libraries",
      "keywords": ["React", "Node.js", "Express", "Django"]
    },
    {
      "name": "Tools & Platforms",
      "keywords": ["Git", "Docker", "AWS", "Jenkins"]
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Solutions Architect – Associate",
      "date": "2021-08"
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native"
    },
    {
      "language": "Spanish",
      "fluency": "Professional Working Proficiency"
    }
  ]
}
app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
    console.log('hitted')
    return res.json({message:"Hello"});
})
app.post('/api/v1/build-resumse',generateResume)

app.listen(4000,()=>{
    console.log("Chala");
})