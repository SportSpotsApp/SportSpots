import xml.etree.ElementTree as ET
import codecs
import unidecode
import os


def cammelCaseFormat(string):
    # remove accents
    string = unidecode.unidecode(string)
    # replace spaces with empty string and make first letter uppercase
    string = string.title().replace(" ", "")
    return string


# Current directory location
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

# Parse the XML file
tree = ET.parse(os.path.join(__location__, "Sports.xml"))
root = tree.getroot()

# Write the data to a js file
file = codecs.open(os.path.join(__location__, "Sport.ts"), "w", "utf-8")
file.write("export const Sport = [\n")
for child in root:
    file.write('\t["' + child.text + '"], ["' + cammelCaseFormat(child.text) + '"],\n')
file.write("];")
file.close()
