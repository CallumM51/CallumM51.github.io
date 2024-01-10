---
title: Unmasking Bot Activity Identifying Automated Tweets in the Ukraine-Russia Conflict Discourse
date:   2024-01-09 12:00:00 -700 # 'yyyy-mm-dd hh:nn:ss -utc' offset e.g. -600 = MDT
categories: [Projects,University]
tags: [distributed-computing,machine-learning,pyspark] # Tags should always be lowercase
image: /assets/img/twitter_bot_scrape.png
pin: true
---

# Unmasking Bot Activity: Identifying Automated Tweets in the Ukraine-Russia Conflict Discourse


[View the repo ->](https://github.com/CallumM51/SENG-550-Project){: .prompt-info }

## Acknowledgements
This project was developed as part of the *SENG 550 Scalable Data Analytics* course at the University of Calgary under the instruction of [Dr. Diwakar Krishnamurthy](https://profiles.ucalgary.ca/diwakar-krishnamurthy). Please check out my talented co-authors of this project:

* [Cebrail Durna](https://github.com/cebdurna)
* [Victor Han](https://github.com/Vic-Han)
* [Logan Perry Din](https://github.com/Logan-PD)

This project would not be possible without the work of [BwandoWando](https://www.kaggle.com/bwandowando) compiling the referenced dataset.

## Background

The United States Senate has confirmed that Russia used bot
farms to influence the 2016 election. During the
Russo-Ukraine war, Ukraine has already claimed to have
taken down a Russian bot farm. Bot farms are becoming a
popular and problematic issue in geopolitical events.
Therefore the ability to accurately recognize bot activity
becomes invaluable. Any company vulnerable to a bot farm
would benefit from the ability to detect and remove bots
from their platform. In our case, Twitter being able to
accurately remove the influence of bot farms owned by state
actors would minimize the effectiveness of malicious efforts.
This project explores how distributed data analysis and machine learning can be used to predict bot accounts on twitter. 

## Methodology

Our raw data comes from the [Ukraine Conflict Twitter Dataset](https://www.kaggle.com/datasets/bwandowando/ukraine-russian-crisis-twitter-dataset-1-2-m-rows) available on Kaggle. Using Databricks and PySpark we cleaned and preprocessed our features. Then we were able to run our *Heuristic Algorithm* to begin labeling suspicious accounts. Then as contrast we used K-means clustering to group accounts by underlying patterns in the data. Comparing the produced groups against the *Heuristic Algorithm* we were able to confidently label bot accounts.

## Results

A full write-up, in IEEE, format can be found [here](https://1drv.ms/b/s!Ajl_W_DWQIaPnDFVW-tpvVXOSTQx?e=hT1cWQ). 

## Code

Please feel free to fork our [GitHub repository](https://github.com/CallumM51/SENG-550-Project) and try the code yourself, following the included markdown file for instructions.