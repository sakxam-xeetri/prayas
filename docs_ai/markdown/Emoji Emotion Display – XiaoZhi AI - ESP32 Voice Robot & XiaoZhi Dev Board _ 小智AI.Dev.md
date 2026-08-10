Emoji Emotion Display – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:55 PM 

XiaoZhi AI Chatbot Documentation Center | XiaoZhi.Dev Development Guide **Emoji Emotion Display** 

# **Emoji Emotion Display** 

## **Overview** 

Large language models use a single Emoji token to express their current emotional state. These emoticons are not read aloud by the TTS system but are returned to the client as independent data types. 

## **Data Format** 

Communication uses JSON format, as shown in the example below: 

`{ "type": "llm", "text": "` 😊 `", "emotion": "smile" }` 

## **Emoji Reference Table** 

### **Emoji Emotion Type Description** 

😶 neutral Neutral/Calm 

https://xiaozhi.dev/en/docs/development/emotion/ 

1/3 

Emoji Emotion Display – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:55 PM 

### **Emoji Emotion Type Description** 

|🙂|happy|Happy|
|---|---|---|
|😆|laughing|Laughing|
|😂|funny|Funny|
|😔|sad|Sad|
|😠|angry|Angry|
|😭|crying|Crying|
|😍|loving|Loving|
|😳|embarrassed|Embarrassed|
|😲|surprised|Surprised|
|😱|shocked|Shocked|
|🤔|thinking|Thinking|
|😉|winking|Winking|
|😎|cool|Cool|
|😌|relaxed|Relaxed|
|🤤|delicious|Delicious|
|😘|kissy|Kissing|
|😏|confident|Confident|
|😴|sleepy|Sleepy|
|😜|silly|Silly|



https://xiaozhi.dev/en/docs/development/emotion/ 

2/3 

Emoji Emotion Display – XiaoZhi AI - ESP32 Voice Robot & XiaoZhi Dev Board | 小智AI.Dev 

8/8/26, 8:55 PM 

### **Emoji Emotion Type Description** 

🙄 confused Confused 

## **Usa e Instructions** **<u>g</u>** 

1. When the client receives a response containing the emotion field, it should parse the corresponding emotion type 

2. The interface display effect or corresponding animation can be adjusted according to the emotion type 

3. The TTS system should ignore Emoji characters in the text field 

## **Notes** 

Emoji uses UTF-8 encoding 

Ensure that the client has the ability to display Emoji 

It is recommended to display both the Emoji and the corresponding emotion type text on the interface 

### **Powered by XiaoZhi.Dev** 

- © 2025 xiaozhi.dev. ai@xiaozhi.dev 

https://xiaozhi.dev/en/docs/development/emotion/ 

3/3 

