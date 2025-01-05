import React, { useState, useEffect } from 'react';

const Downloads = () => {
  // Mock list of downloaded PDFs, you can fetch this from an API or backend
  const [downloads, setDownloads] = useState([
    { id: 1, filename: 'ExpenseList_January_2023.pdf', date: '2023-01-31' },
    { id: 2, filename: 'ExpenseList_February_2023.pdf', date: '2023-02-28' },
    { id: 3, filename: 'ExpenseList_March_2023.pdf', date: '2023-03-31' },
  ]);

  // Function to handle PDF download
  const handleDownload = (filename) => {
    // Here, you should fetch or generate the PDF from your backend
    console.log(`Downloading ${filename}`);
    // Triggering the actual download (mock example)
    // Replace the following line with the actual download logic
    window.location.href = `/path/to/pdf/files/${filename}`; // Adjust the path to where your PDF files are stored
  };

  return (
    <section className="downloads-container">
      <h2>Downloaded Expense Lists</h2>
      <ul className="downloads-list">
        {downloads.map((download) => (
          <li key={download.id} className="download-item">
            <span>{download.filename}</span>
            <span>{download.date}</span>
            <button onClick={() => handleDownload(download.filename)}>
              Download
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Downloads;
