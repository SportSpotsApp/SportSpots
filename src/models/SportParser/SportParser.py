import xml.etree.ElementTree as ET
import codecs
import os

# Current directory location
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

# Parse the XML file
tree = ET.parse(os.path.join(__location__, "Sports.xml"))
root = tree.getroot()

# Write the data to a js file
file = codecs.open(os.path.join(__location__, "Sport.ts"), "w", "utf-8")
file.write("export const Sport = [\n")
for child in root:
    file.write('\t["' + child.text + '"], ["' + child.text + '"],\n')
file.write("];")
file.close()
