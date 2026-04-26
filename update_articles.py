import sys

with open('old_articles.js', 'r') as f:
    new_articles = f.read().strip() + "\n"

def replace_articles(filename):
    with open(filename, 'r') as f:
        content = f.read()
    
    start_str = "const ARTICLES = {"
    end_str = "};\n\nfunction openArticle"
    
    start_idx = content.find(start_str)
    end_idx = content.find(end_str, start_idx)
    
    if start_idx == -1 or end_idx == -1:
        print(f"Could not find boundaries in {filename}")
        return
        
    final_content = content[:start_idx] + new_articles + content[end_idx:]
    
    with open(filename, 'w') as f:
        f.write(final_content)
    print(f"Success {filename}")

replace_articles('index.html')
replace_articles('index-2.html')
