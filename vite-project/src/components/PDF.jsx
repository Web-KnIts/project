// ResumePDF.js
import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 12, lineHeight: 1.5 }, // no fontFamily
  header: { marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  title: { fontSize: 18, marginBottom: 10, color: '#555' },
  sectionHeader: { fontSize: 14, marginTop: 10, marginBottom: 4, fontWeight: 'bold' },
  text: { fontSize: 12 },
  listItem: { flexDirection: 'row', marginBottom: 2 },
  bullet: { width: 6 },
  bulletText: { flex: 1 }
});

const ResumePDF = ({ resumeData }) => {
  const { personal_info, summary, skills, experience, education, certifications, languages } = resumeData.resume;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personal_info.name}</Text>
          <Text style={styles.title}>{personal_info.title}</Text>
        </View>

        <Text style={styles.text}>{summary}</Text>

        <Text style={styles.sectionHeader}>Skills</Text>
        {Object.entries(skills).map(([category, items]) => (
          <Text key={category} style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{category.replace(/_/g, ' ')}:</Text> {items.join(', ')}
          </Text>
        ))}

        <Text style={styles.sectionHeader}>Experience</Text>
        {experience.map((job, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>
              {job.title} @ {job.company} ({job.years})
            </Text>
            {job.responsibilities.map((task, j) => (
              <View key={j} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{task}</Text>
              </View>
            ))}
          </View>
        ))}

        <Text style={styles.sectionHeader}>Education</Text>
        {education.map((edu, i) => (
          <Text key={i} style={styles.text}>
            <Text style={{ fontWeight: 'bold' }}>{edu.degree}</Text>, {edu.major} — {edu.university} ({edu.graduation_year})
          </Text>
        ))}

        <Text style={styles.sectionHeader}>Certifications</Text>
        {certifications.map((cert, i) => (
          <Text key={i} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{cert}</Text>
          </Text>
        ))}

        <Text style={styles.sectionHeader}>Languages</Text>
        {languages.map((lang, i) => (
          <Text key={i} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{lang.language} — {lang.proficiency}</Text>
          </Text>
        ))}
      </Page>
    </Document>
  );
};

export default ResumePDF;
