from PIL import Image, ImageDraw, ImageFont
import PIL
import sys
import os, glob
import subprocess

def compressImage(file, verbose = False):
    
    # Get the path of the file
    filepath = os.path.join(os.getcwd(), 
                            file)
      
    # open the image
    picture = Image.open(filepath)

    print('Precompressed: ', os.stat(filepath).st_size)
      
    # Save the picture with desired quality
    # To change the quality of image,
    # set the quality variable at
    # your desired level, The more 
    # the value of quality variable 
    # and lesser the compression
    picture = picture.quantize(colors=256, method=None, kmeans=0, palette=None, dither=1)
    picture.save(file, 
                 "PNG", optimize=True)

    print('Compressed: ', os.stat(filepath).st_size)
    return


def main():
    
    verbose = False
      
    # checks for verbose flag
    if (len(sys.argv)>1):
        
        if (sys.argv[1].lower()=="-v"):
            verbose = True
                      
    # finds current working dir
    cwd = os.getcwd()
  
    formats = ('.png')
      
    # looping through all the files
    # in a current directory
    for filename in glob.iglob(cwd + "\\assets\**", recursive=True):
        print(filename)
        if os.path.splitext(filename)[1].lower() in formats:
            if os.stat(filename).st_size >= 1000000:
                print('Compressing ', filename)
                compressImage(filename, verbose)

    print("Splitting bootstrap file")

    for filename in glob.glob("bootstrapdesign.zip*"):
        os.remove(filename) 

    subprocess.call([r'split.bat'])
  
# Driver code
if __name__ == "__main__":
    main()
