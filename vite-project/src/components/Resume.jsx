import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './PDF';

const ResumePage = ({ resumeData }) => {
  if (!resumeData || !resumeData.resume) {
    return <p>No resume data provided.</p>;
  }

  return (
    <div className="container p-5">
      <PDFDownloadLink
        document={<ResumePDF resumeData={resumeData} />}
        fileName="resume.pdf"
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded inline-block"
      >
        {({ loading }) => (loading ? 'Preparing PDF…' : 'Download as PDF')}
      </PDFDownloadLink>

      <div style={{ height: '800px', border: '1px solid #ccc', marginTop: '1rem' }}>
        <PDFViewer width="100%" height="100%">
          <ResumePDF resumeData={resumeData} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default ResumePage;
