import pathlib

p = pathlib.Path('src/data.js')
content = p.read_text(encoding='utf-8')

new_block = """export const certifications = [
  {
    id: 'oci-generative-ai',
    category: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    level: 'Professional',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9DB1763C98AA7514FD8DCFC17074B8E4E9E63684B13F6CB1DC13C1E7D48FE303',
  },
  {
    id: 'oci-ai-foundations',
    category: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    level: 'Associate',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F87BED9F428E8F8D22DC7C50DA5FF45D4C12FA621C5D9D93B8BE27277FCDE5CF',
  },
  {
    id: 'claude-certified-associate',
    category: 'Anthropic',
    title: 'Claude Certified Associate',
    level: 'Associate',
    link: 'https://www.credly.com/badges/63b5af36-955b-44e0-8a41-e183f7ee09ea',
  },
  {
    id: 'java-se-8',
    category: 'Oracle',
    title: 'Java SE 8 Programming - Oracle Certified Associate',
    level: 'Associate',
    link: 'https://www.oracle.com/java/technologies/javase/java8-jsp.html',
  },
  {
    id: 'aws-cloud-practitioner',
    category: 'Amazon Web Services',
    title: 'AWS Certified Cloud Practitioner',
    level: 'Foundational',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
  },
]
"""

old_start = content.find('export const certifications = [')
old_end = content.find('\n]\n', old_start)
if old_start == -1 or old_end == -1:
    raise SystemExit('anchors not found')

end_bracket = old_end + 2
new_content = content[:old_start] + new_block + content[end_bracket:]
p.write_text(new_content, encoding='utf-8')
print('done')
