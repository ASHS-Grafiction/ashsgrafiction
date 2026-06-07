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
    # picture = picture.quantize(colors=256, method=None, kmeans=3, palette=None, dither=Image.FLOYDSTEINBERG)
    picture = picture.convert("RGBA", palette=Image.ADAPTIVE, colors=256)
    
    (width, height) = (round(picture.width // 1.15), round(picture.height // 1.15))
    
    picture = picture.resize((width, height), resample=PIL.Image.HAMMING, reducing_gap=3.0)
    picture.save(file, 
                 "PNG", optimize=True)

    print('Compressed: ', os.stat(filepath).st_size)
    return

def extraCompressImage(file, verbose = False):
    
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
    # picture = picture.quantize(colors=256, method=None, kmeans=3, palette=None, dither=Image.FLOYDSTEINBERG)
    picture = picture.convert("RGBA", palette=Image.ADAPTIVE, colors=256)
    
    (width, height) = (round(picture.width // 1.25), round(picture.height // 1.25))
    
    picture = picture.resize((width, height), resample=PIL.Image.HAMMING, reducing_gap=3.0)
    picture.save(file, 
                 "PNG", optimize=True)

    print('Compressed: ', os.stat(filepath).st_size)
    return

def extraSuperCompressImage(file, verbose = False):
    
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
    # picture = picture.quantize(colors=256, method=None, kmeans=3, palette=None, dither=Image.FLOYDSTEINBERG)
    picture = picture.convert("RGBA", palette=Image.ADAPTIVE, colors=256)
    
    (width, height) = (round(picture.width // 1.35), round(picture.height // 1.35))
    
    picture = picture.resize((width, height), resample=PIL.Image.HAMMING, reducing_gap=3.0)
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

    print("Splitting bootstrap file")

    for filename in glob.glob("bootstrapdesign.zip*"):
        os.remove(filename) 

    subprocess.call([r'split.bat'])
  
# Driver code
if __name__ == "__main__":
    main()
