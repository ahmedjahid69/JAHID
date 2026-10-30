import sys

# Read raw RGBA bytes
width = 1024
height = 1024

with open('/tmp/input.rgba', 'rb') as f:
    data = bytearray(f.read())

# Check pixel values
# Background at top corners: (0,0), (1023,0), etc.
# Man's hair is dark (R<60, G<60, B<60).
# Background is bright office wall (R>160, G>150, B>140).
# Let's inspect some sample pixels
def get_pixel(x, y):
    idx = (y * width + x) * 4
    return data[idx], data[idx+1], data[idx+2]

print("Corner (10, 10):", get_pixel(10, 10))
print("Corner (1010, 10):", get_pixel(1010, 10))
print("Center top (512, 50):", get_pixel(512, 50))
print("Man forehead (512, 350):", get_pixel(512, 350))
print("Man hair (512, 180):", get_pixel(512, 180))
