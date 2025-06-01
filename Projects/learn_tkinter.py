from tkinter import *
root = Tk()
e=Entry(root,width=50,borderwidth=5,fg="#ff0000",bg="#ffffff")
e.insert(0,"Enter Your Name")
e.pack()
#function for the button
def click():
    mylabel=Label(root,text=e.get()+" welcome")
    mylabel.pack()
mybutton=Button(root,text="Enter Your Name",command=click)
mybutton.pack()






root.mainloop()