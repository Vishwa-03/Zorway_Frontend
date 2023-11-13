import React from 'react';
import PreviousMarksheets from './Previous';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const YourComponent = () => {
  // Mock data for demonstration purposes
  const semestersData = [
    {
      subjects: [
        { subjectName: 'Information theory & coidng', grade: "A+" },
        { subjectName: 'Control System', grade:"A+"  },
        { subjectName: 'Telecom System', grade:"A+"  },
        { subjectName: ' Data structure & algorithm', grade:"A+"  },
        { subjectName: 'Communication System', grade:"A+"  },
        { subjectName: 'VLSI ', grade:"A+"  },
        // Add more subjects and scores as needed
      ],
    },
    {
      subjects: [
        { subjectName: 'LIC', grade: "A+" },
        { subjectName: 'DCD', grade:"A+"  },
        { subjectName: 'Signals and System', grade:"A+"  },
        { subjectName: ' Networks ', grade:"A+"  },
        { subjectName: 'Neural networks', grade:"A+"  },
        { subjectName: 'Mathematics-3 ', grade:"A+"  },
        // Add more subjects and scores as needed
      ],
    },
    {
      subjects: [
        { subjectName: 'Information theory & coidng', grade: "A+" },
        { subjectName: 'Control System', grade:"A+"  },
        { subjectName: 'Telecom System', grade:"A+"  },
        { subjectName: ' Data structure & algorithm', grade:"A+"  },
        { subjectName: 'Communication System', grade:"A+"  },
        { subjectName: 'VLSI ', grade:"A+"  },
        // Add more subjects and scores as needed
      ],
    },
    {
      subjects: [
        { subjectName: 'LIC', grade: "A+" },
        { subjectName: 'DCD', grade:"A+"  },
        { subjectName: 'Signals and System', grade:"A+"  },
        { subjectName: ' Networks ', grade:"A+"  },
        { subjectName: 'Neural networks', grade:"A+"  },
        { subjectName: 'Mathematics-3 ', grade:"A+"  },
        // Add more subjects and scores as needed
      ],
    },
    {
      subjects: [
        { subjectName: 'LIC', grade: "A+" },
        { subjectName: 'DCD', grade:"A+"  },
        { subjectName: 'Signals and System', grade:"A+"  },
        { subjectName: ' Networks ', grade:"A+"  },
        { subjectName: 'Neural networks', grade:"A+"  },
        { subjectName: 'Mathematics-3 ', grade:"A+"  },
        // Add more subjects and scores as needed
      ],
    },
    
    
    
  ];

  return (
    <div className='flex justify-evenly '>
      {/* Other components or content */}
      <PreviousMarksheets semesters={semestersData} />
      <div className="flex justify-center mt-[3rem] mr-6"> <Link to="/dashboard">
        <Button variant="outlined">
            Go to Dashboard
        </Button>
      </Link></div>
    </div>
  );
};

export default YourComponent;
