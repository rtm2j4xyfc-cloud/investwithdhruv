const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = html.split('<script>')[1].split('</script>')[0];
try {
  new Function(js);
  console.log('No syntax errors');
} catch(e) {
  console.log('Syntax error:', e);
}
