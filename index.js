import random

print("🔥 Verification System")

# generate code
code = str(random.randint(100000, 999999))

print("Your code is:", code)

# user input
user = input("Enter code: ")

if user == code:
    print("✅ Verified!")
else:
    print("❌ Wrong code")
