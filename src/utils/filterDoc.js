export const filterDoc = (pageContent) => {
  // Try to parse as JSON first
    // Remove all HTML tags
    let cleanText = pageContent.replace(/<[^>]*>/g, '');
  
    // Remove extra whitespace and trim
    cleanText = cleanText.replace(/\s+/g, ' ').trim();
    
    // Extract the relevant content (assuming it starts after "Functions of Department")
    let startIndex = cleanText.indexOf('Functions of Department');
    if (startIndex !== -1) {
      cleanText = cleanText.slice(startIndex);
    }
    
    // Split the text into lines
    let lines = cleanText.split('.');
    
    // Filter out empty lines and trim each line
    lines = lines.map(line => line.trim()).filter(line => line.length > 0);
    
    // Remove the "Functions of Department" and date line
    lines = lines.slice(2);
    
    // Join the lines back together with line breaks
    return lines.join('\n');
  
};
