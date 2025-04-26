export const partnerProgramEmailTemplate = (data: any): string => {
  return `
    <h2>Partner Program Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.companyName}</p>
    <p><strong>Interests:</strong> ${data.interests.join(", ")}</p>
    ${data.details ? `<p><strong>Details:</strong> ${data.details}</p>` : ""}
    <p><strong>Newsletter:</strong> ${data.newsletter ? "Yes" : "No"}</p>
  `;
};

export const diversityTrackerEmailTemplate = (data: any): string => {
  return `
    <h2>Diversity Tracker Submission</h2>
    <p><strong>Self Identity:</strong> ${data.selfIdentity}</p>
    <p><strong>Age Range:</strong> ${data.ageRange}</p>
    <p><strong>Ethnicity:</strong> ${data.ethnicity}</p>
    <p><strong>Disability:</strong> ${data.disability}</p>
    <p><strong>Sexual Orientation:</strong> ${data.sexualOrientation}</p>
    <p><strong>Equity Scale:</strong> ${data.equityScale}</p>
    ${
      data.improvementSuggestions
        ? `<p><strong>Improvement Suggestions:</strong> ${data.improvementSuggestions}</p>`
        : ""
    }
    ${
      data.grantProvider
        ? `<p><strong>Grant Provider:</strong> ${data.grantProvider}</p>`
        : ""
    }
    ${
      data.grantRound
        ? `<p><strong>Grant Round:</strong> ${data.grantRound}</p>`
        : ""
    }
    ${
      data.suggestions
        ? `<p><strong>Suggestions:</strong> ${data.suggestions}</p>`
        : ""
    }
    ${
      data.activeGrantsParticipated
        ? `<p><strong>Active Grants:</strong> ${data.activeGrantsParticipated}</p>`
        : ""
    }
  `;
};
