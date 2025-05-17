import tkinter as tk

def click(value):
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(0, current + value)

def clear():
    entry.delete(0, tk.END)

def calculate():
    try:
        result = eval(entry.get())
        entry.delete(0, tk.END)
        entry.insert(0, str(result))
    except:
        entry.delete(0, tk.END)
        entry.insert(0, "Error")

window = tk.Tk()
window.title("Calculator")

entry = tk.Entry(window, width=16, font=('Arial', 24), borderwidth=2, relief="solid", justify='right')
entry.grid(row=0, column=0, columnspan=4)

buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

row = 1
col = 0

for button in buttons:
    if button == '=':
        action = calculate
    elif button == 'C':
        action = clear
    else:
        action = lambda x=button: click(x)
    b = tk.Button(window, text=button, width=5, height=2, font=('Arial', 18), command=action)
    b.grid(row=row, column=col, padx=5, pady=5)
    col += 1
    if col > 3:
        col = 0
        row += 1

clear_btn = tk.Button(window, text='C', width=5, height=2, font=('Arial', 18), command=clear)
clear_btn.grid(row=row, column=0, padx=5, pady=5)

window.mainloop()
