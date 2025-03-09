# @Author: Bertan Berker
# @Language: Python
#

# Groq MultiModal App Challenge
# Groq API

import os
from groq import Groq
import pandas as pd
from dotenv import load_dotenv
load_dotenv()

api_key = os.getenv("GROQ_API_KEY")

# Loads the csv file 
# :param file_path: The file path
# :return: df
def load_csv(file_path):
    df = pd.read_csv(file_path)
    return df


def heart_disease_prediction(df, apple_data, fitbit):

    client = Groq(
        api_key=api_key,
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"Return one sentence that states the heart disease risk of the user based on their data from \
                    {apple_data} and {fitbit} and based on the trends and data from heart risk dataset: {df}. Only return one sentence \
                        for example: 'The heart attack risk is 50% in the next week'.",
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    return chat_completion.choices[0].message.content
    


def get_analysis():
    
    apple_data = load_csv("./dataset/apple_watch.csv")[0:1]
    fitbit = load_csv("./dataset/fitbit.csv")[0:1]
    heart_analytics = heart_disease_prediction(load_csv('./dataset/heart_health_indicators.csv'), apple_data, fitbit)

    client = Groq(
        api_key=api_key,
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"You are a licensed medical professional and skilled as a dietition as well as a personal trainer. \
                    Based on the user's {apple_data} and {fitbit} data, analyze their health stats and give a detailed explaination \
                 of their health data. Additionally, indicate the percentage of that person facing a heart condition based on their {heart_analytics}. \
                    Finally give only 10 analytics and include the source. For example: 1- You are not sleeping enough! You sleeped only for 4 hours on average (Apple Watch). \
                        Only use my dataset and don't do any websearch, additionally only give 10 points and no prior or former explanation",
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    return chat_completion.choices[0].message.content



def get_habits():

    analysis = get_analysis()
        
    client = Groq(
        api_key=api_key,
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"You are a professional medical professonal who is skilled as a dietition and personal traineer and \
                    based on the health analysis of the user: {analysis}, give 10 action steps for the user to make healthier habits. ",
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    return chat_completion.choices[0].message.content



def compare_last_week():

    current_week = get_analysis()

    # Last week's data
    apple_data = load_csv("./dataset/apple_watch.csv")[1:2]
    fitbit = load_csv("./dataset/fitbit.csv")[1:2]
    heart_analytics = heart_disease_prediction(load_csv('./dataset/heart_health_indicators.csv'), apple_data, fitbit)

    client = Groq(
        api_key=api_key,
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"You are a licensed medical professional and skilled as a dietition as well as a personal trainer. You are given \
                the task to compare the user's current data versus the last week to see if they made imporevements or did their progress suffer \
                Look into their {current_week} and the previous week's data from their {apple_data}, {fitbit} and {heart_analytics}. Give a list of 10 \
                things that improved or got worse at and only provide and return those ten things no other text before or after. For example: The user ran twice as longer \
                compared to last week. "
            }
        ],
        model="llama-3.3-70b-versatile",
    )

    return chat_completion.choices[0].message.content