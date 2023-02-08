ffmpeg -y -i input.webm -vf palettegen palette.png
ffmpeg -y -i input.webm -i palette.png -filter_complex paletteuse -r 10 output.gif
gifsicle -O2 --scale 0.5 output.gif -o done.gif