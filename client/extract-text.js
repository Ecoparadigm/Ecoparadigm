const fs = require('fs');

try {
  const html = fs.readFileSync('C:\\Users\\Dell\\.gemini\\antigravity\\brain\\398e7b32-3921-482d-8113-e9a3bc3017b1\\.system_generated\\steps\\1231\\content.md', 'utf8');
  
  // Very basic regex to strip script, style, and html tags
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
                 .replace(/<!--[\s\S]*?-->/g, '')
                 .replace(/<[^>]+>/g, ' ');
                 
  // Clean up excessive whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  // The first few thousand characters usually give a good idea of the sections
  console.log(text.substring(0, 3000));
} catch (e) {
  console.error(e);
}
