import random
import tkinter as tk

code = str(random.randint(100000, 999999))

def check():
    if entry.get() == code:
        result.config(text="✅ Verified!")
    else:
        result.config(text="❌ Wrong code")

app = tk.Tk()
app.title("Verification System")

label = tk.Label(app, text=f"Your code: {code}")
label.pack()

entry = tk.Entry(app)
entry.pack()

button = tk.Button(app, text="Verify", command=check)
button.pack()

result = tk.Label(app, text="")
result.pack()

app.mainloop()
