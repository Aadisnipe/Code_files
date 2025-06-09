import speech_recognition as sr
import pyttsx3

recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

EXIT_COMMANDS = ["stop protocol"]

print("Say something! Say 'stop listening' to exit.")

while True:
    try:
        with sr.Microphone() as source:
            print("Listening...")
            recognizer.adjust_for_ambient_noise(source, duration=0.2)
            audio = recognizer.listen(source)

            text = recognizer.recognize_google(audio).lower()  # lower to make case-insensitive
            print("Command:", text)

            if text in EXIT_COMMANDS:
                print("Exit command received. Exiting program.")
                speak("Goodbye!")
                break

            speak(f"Command Executed: {text}")

    except sr.UnknownValueError:
        print("Sorry, I didn't understand that. Please try again.")
        speak("Sorry, I didn't understand that. Please try again.")
        recognizer = sr.Recognizer()
