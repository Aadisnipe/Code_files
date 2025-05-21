from tkinter import *

# Creating main blank window
root = Tk()
root.title("Calculator")

# Screen of the calculator
entry = Entry(root, font=("Courier New", 18), width=29, bg="#DDE5D0", borderwidth=5, fg="black")
entry.grid(row=0, column=0, columnspan=4, ipady=5)

# Creating buttons
buttons = [
    "AC", "<--", "+/-", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "%", "0", ".", "="
]

r = 1
c = 0

# Configure rows and columns
for j in range(4):
    root.columnconfigure(j, weight=1)
for k in range(1, 6):
    root.rowconfigure(k, weight=1)

# Global variables
f_num = 0
eq = ""

# Loop to create buttons
for i in buttons:
    def on_click(n=i):
        global f_num, eq

        if n == "AC":
            entry.delete(0, END)

        elif n not in ("AC", "<--", "+/-", "/", "*", "+", "-", "%", ".", "="):
            current = entry.get()
            entry.delete(0, END)
            entry.insert(0, current + n)

        elif n in ("+", "-", "*", "/","%"):
            try:
                f_num = float(entry.get())  # FIXED: always store as float
                eq = n
                entry.delete(0, END)
            except:
                entry.delete(0, END)
                entry.insert(0, "Error")

        elif n == "+/-":
            current = entry.get()
            if current.startswith("-"):
                entry.delete(0, END)
                entry.insert(0, current[1:])
            else:
                entry.delete(0, END)
                entry.insert(0, "-" + current)

        elif n == "<--":
            current = entry.get()
            if current:
                entry.delete(0, END)
                entry.insert(0, current[:-1])

        elif n == ".":
            current = entry.get()
            if "." not in current:
                entry.insert(END, ".")

        elif n == "=":
            try:
                s_num = float(entry.get())  # FIXED: Always read as float
                result = None

                if eq == "+":
                    result = f_num + s_num
                elif eq == "-":
                    result = f_num - s_num
                elif eq == "*":
                    result = f_num * s_num
                elif eq=="%":
                    result= (f_num/100)*s_num
                elif eq == "/":
                    if s_num == 0:
                        entry.delete(0, END)
                        entry.insert(0, "Error")
                        return
                    result = f_num / s_num

                entry.delete(0, END)
                # FIXED: Show as int if result is whole number
                if result is not None:
                    if result.is_integer():  #is_integer checks for integer value
                        entry.insert(0, str(int(result)))
                    else:
                        entry.insert(0, str(result))
            except:
                entry.delete(0, END)
                entry.insert(0, "Error")

    # Create the button
    but = Button(root, text=i, padx=40, pady=20, font=("Helvetica", 14), command=on_click)
    but.grid(row=r, column=c, sticky="nsew")

    # Move to next row/column
    if c <= 2:
        c += 1
    else:
        c = 0
        r += 1

# Run the application
root.mainloop()
