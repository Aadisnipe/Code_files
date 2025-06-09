import pyaudio
import wave

audio = pyaudio.PyAudio()

stream = audio.open(format=pyaudio.paInt16,
                    channels=1,
                    rate=44100,
                    input=True,
                    frames_per_buffer=1024)

print("Recording... Press Ctrl+C to stop.")

frames = []

try:
    while True:
        data = stream.read(1024)
        frames.append(data)
except KeyboardInterrupt:
    print("\nRecording stopped.")
finally:
    # Always close and save even if interrupted
    stream.stop_stream()
    stream.close()
    audio.terminate()

    wf = wave.open('output.wav', 'wb')
    wf.setnchannels(1)
    wf.setsampwidth(audio.get_sample_size(pyaudio.paInt16))
    wf.setframerate(44100)
    wf.writeframes(b''.join(frames))
    wf.close()

    print("Audio saved to output.wav")
