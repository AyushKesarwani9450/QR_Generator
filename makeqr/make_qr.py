import qrcode

# Data to encode
data = "https://www.youtube.com/"

# Create QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=2,
)
qr.add_data(data)
qr.make(fit=True)

# Save as an image
img = qr.make_image(fill_color="black", back_color="white")
img.save("qrcode.png")
