import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ResumeBuilder from './components/Resume'
import axios from 'axios'

function App() {
  const [pr, setpr] = useState("create a resume for web developer profile")
  const [isRunning,setRunning] = useState(false);
  
  const resumeData = `
  Provide response in this format only : 
  Example : (Dont use this dummy data)
  "resume": {
        "personal_info": {
            "name": "John Doe",
            "title": "Software Engineer"
        },
        "summary": "Highly motivated and results-oriented Software Engineer with 5+ years of experience in designing, developing, and deploying scalable software solutions. Proven ability to leverage a diverse tech stack including JavaScript, Python, Java, React, Node.js, Docker, and AWS to build robust applications. AWS Certified Solutions Architect with a passion for optimizing performance and improving user experience.",
        "skills": {
            "programming_languages": [
                "JavaScript",
                "Python",
                "Java"
            ],
            "frameworks_libraries": [
                "React",
                "Node.js"
            ],
            "cloud_platforms": [
                "AWS"
            ],
            "devops_tools": [
                "Docker",
                "Jenkins"
            ],
            "databases": [
                "SQL",
                "NoSQL (e.g., MongoDB, PostgreSQL - added for realism)"
            ],
            "other_tools": [
                "Git",
                "Jira",
                "Agile Methodologies"
            ]
        },
        "experience": [
            {
                "title": "Senior Software Engineer",
                "company": "TechCorp Inc.",
                "years": "2021 - Present",
                "responsibilities": [
                    "Led the design and implementation of highly scalable microservices using Node.js and AWS Lambda, reducing latency by 20%.",
                    "Developed and maintained complex front-end applications with React, enhancing user interface and experience.",
                    "Implemented CI/CD pipelines using Jenkins and Docker to automate deployments, increasing release frequency by 50%.",
                    "Collaborated with cross-functional teams to define project requirements, architect solutions, and deliver high-quality software."
                ]
            },
            {
                "title": "Software Engineer",
                "company": "CodeWorks LLC",
                "years": "2018 - 2021",
                "responsibilities": [
                    "Developed robust backend APIs in Python and Java, supporting critical business operations.",
                    "Contributed to the optimization of database queries and system performance, resulting in a 15% improvement in response times.",
                    "Participated in code reviews, ensuring code quality, maintainability, and adherence to best practices.",
                    "Assisted in troubleshooting and debugging production issues, providing timely resolutions."
                ]
            }
        ],
        "education": [
            {
                "degree": "Bachelor of Science",
                "major": "Computer Science",
                "university": "UC Berkeley",
                "graduation_year": "2018"
            }
        ],
        "certifications": [
            "AWS Certified Solutions Architect"
        ],
        "languages": [
            {
                "language": "English",
                "proficiency": "Native/Fluent"
            },
            {
                "language": "Spanish",
                "proficiency": "Professional Working Proficiency"
            }
        ]
    }
    
  ${pr}
  `
  const [data,setData ] = useState(null);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log('sent');
    const response = await axios.post("http://localhost:4000/api/v1/build-resumse",{prompt:resumeData})
    const res = response.data
    setData(res)
  }
  return (
    <>
    <div className=''>
      <div className='flex flex-col w-[40vw] justify-center items-center m-auto'>
        <label htmlFor="" className=''>Enter Prompt</label>
        <textarea type="text" className='border border-red-500' rows={10} cols={50} value={pr} onChange={(e)=>setpr(e.target.value)}/>
        <button onClick={(e)=>handleSubmit(e)} className='w-fit bg-amber-400 p-4 rounded-4xl'>Submit</button>
      </div>
    {data &&  <ResumeBuilder resumeData={data} />}
      
    </div>
    </>
  )
}

export default App
