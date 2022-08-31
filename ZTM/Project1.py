import os
import sys
from PIL import Image

# grab first and second argument
folder = sys.argv[1]
new_folder = sys.argv[2]


# check if new exists, if not, create
if os.path.exists(new_folder) == False:
    os.makedirs(new_folder)

# looping through folder
for image in os.listdir(folder):
    img = Image.open(f'{folder}{image}')

    # giving name to new pics and saving
    new_name = os.path.splitext(image)[0]
    img.save(f'{new_name}.png', 'png')
    print('saved')
