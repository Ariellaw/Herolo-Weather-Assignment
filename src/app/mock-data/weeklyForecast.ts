// `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&details=true&metric=true`

const weeklyForecastMockData:any =
{
  "Headline": {
    "EffectiveDate": "2020-03-28T14:00:00-04:00",
    "EffectiveEpochDate": 1585418400,
    "Severity": 3,
    "Text": "Expect rainy weather tomorrow afternoon through Sunday afternoon",
    "Category": "rain",
    "EndDate": "2020-03-29T20:00:00-04:00",
    "EndEpochDate": 1585526400,
    "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/extended-weather-forecast/349727?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2020-03-27T07:00:00-04:00",
      "EpochDate": 1585306800,
      "Sun": {
        "Rise": "2020-03-27T06:46:00-04:00",
        "EpochRise": 1585305960,
        "Set": "2020-03-27T19:16:00-04:00",
        "EpochSet": 1585350960
      },
      "Moon": {
        "Rise": "2020-03-27T08:35:00-04:00",
        "EpochRise": 1585312500,
        "Set": "2020-03-27T22:28:00-04:00",
        "EpochSet": 1585362480,
        "Phase": "WaxingCrescent",
        "Age": 3
      },
      "Temperature": {
        "Minimum": {
          "Value": 7.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 18.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 7.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 20.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 7.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 17.2,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 2.9,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 5,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 45,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Particle Pollution"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 450,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 4,
          "Category": "Moderate",
          "CategoryValue": 2
        }
      ],
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "ShortPhrase": "Clouds giving way to some sun",
        "LongPhrase": "Clouds giving way to some sun",
        "PrecipitationProbability": 25,
        "ThunderstormProbability": 0,
        "RainProbability": 25,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 334,
            "Localized": "NNW",
            "English": "NNW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 14.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 334,
            "Localized": "NNW",
            "English": "NNW"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 64
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Increasing clouds",
        "LongPhrase": "Clear early, then increasing clouds",
        "PrecipitationProbability": 3,
        "ThunderstormProbability": 0,
        "RainProbability": 3,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 6.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 28,
            "Localized": "NNE",
            "English": "NNE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 11.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 28,
            "Localized": "NNE",
            "English": "NNE"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 33
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2020-03-28T07:00:00-04:00",
      "EpochDate": 1585393200,
      "Sun": {
        "Rise": "2020-03-28T06:45:00-04:00",
        "EpochRise": 1585392300,
        "Set": "2020-03-28T19:17:00-04:00",
        "EpochSet": 1585437420
      },
      "Moon": {
        "Rise": "2020-03-28T09:04:00-04:00",
        "EpochRise": 1585400640,
        "Set": "2020-03-28T23:29:00-04:00",
        "EpochSet": 1585452540,
        "Phase": "WaxingCrescent",
        "Age": 4
      },
      "Temperature": {
        "Minimum": {
          "Value": 7.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 11.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 1.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 11.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 1.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 10,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 0.2,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 25,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Particle Pollution"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 675,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 1,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "Cloudy and cooler; p.m. rain",
        "LongPhrase": "Cloudy and cooler; periods of rain in the afternoon",
        "PrecipitationProbability": 70,
        "ThunderstormProbability": 5,
        "RainProbability": 70,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 81,
            "Localized": "E",
            "English": "E"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 12.9,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 81,
            "Localized": "E",
            "English": "E"
          }
        },
        "TotalLiquid": {
          "Value": 3.6,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 3.6,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 2,
        "HoursOfRain": 2,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 99
      },
      "Night": {
        "Icon": 18,
        "IconPhrase": "Rain",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "Periods of rain",
        "LongPhrase": "Periods of rain",
        "PrecipitationProbability": 70,
        "ThunderstormProbability": 0,
        "RainProbability": 70,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 16.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 82,
            "Localized": "E",
            "English": "E"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 22.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 82,
            "Localized": "E",
            "English": "E"
          }
        },
        "TotalLiquid": {
          "Value": 6.9,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 6.9,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 3.5,
        "HoursOfRain": 3.5,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 100
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2020-03-29T07:00:00-04:00",
      "EpochDate": 1585479600,
      "Sun": {
        "Rise": "2020-03-29T06:43:00-04:00",
        "EpochRise": 1585478580,
        "Set": "2020-03-29T19:18:00-04:00",
        "EpochSet": 1585523880
      },
      "Moon": {
        "Rise": "2020-03-29T09:36:00-04:00",
        "EpochRise": 1585488960,
        "Set": "2020-03-30T00:29:00-04:00",
        "EpochSet": 1585542540,
        "Phase": "WaxingCrescent",
        "Age": 5
      },
      "Temperature": {
        "Minimum": {
          "Value": 10,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 10,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 10,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 0.1,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 6,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 13,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Particle Pollution"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 1013,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 3,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 1,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate",
        "ShortPhrase": "Cloudy with showers",
        "LongPhrase": "Cloudy with showers",
        "PrecipitationProbability": 83,
        "ThunderstormProbability": 29,
        "RainProbability": 83,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 9.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 66,
            "Localized": "ENE",
            "English": "ENE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 19.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 66,
            "Localized": "ENE",
            "English": "ENE"
          }
        },
        "TotalLiquid": {
          "Value": 9.9,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 9.9,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 4.5,
        "HoursOfRain": 4.5,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 100
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Mostly cloudy",
        "LongPhrase": "Mostly cloudy",
        "PrecipitationProbability": 21,
        "ThunderstormProbability": 14,
        "RainProbability": 21,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 4.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 34,
            "Localized": "NE",
            "English": "NE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 12.9,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 34,
            "Localized": "NE",
            "English": "NE"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 89
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2020-03-30T07:00:00-04:00",
      "EpochDate": 1585566000,
      "Sun": {
        "Rise": "2020-03-30T06:42:00-04:00",
        "EpochRise": 1585564920,
        "Set": "2020-03-30T19:19:00-04:00",
        "EpochSet": 1585610340
      },
      "Moon": {
        "Rise": "2020-03-30T10:14:00-04:00",
        "EpochRise": 1585577640,
        "Set": "2020-03-31T01:30:00-04:00",
        "EpochSet": 1585632600,
        "Phase": "WaxingCrescent",
        "Age": 6
      },
      "Temperature": {
        "Minimum": {
          "Value": 6.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 16.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 4.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 16,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 4.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 15.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 4.1,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 7,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 21,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Particle Pollution"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 1114,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 12,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 3,
          "Category": "Moderate",
          "CategoryValue": 2
        }
      ],
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "ShortPhrase": "Mild with clouds and sun",
        "LongPhrase": "Mild with times of clouds and sun",
        "PrecipitationProbability": 14,
        "ThunderstormProbability": 6,
        "RainProbability": 14,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 14.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 260,
            "Localized": "W",
            "English": "W"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 22.2,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 268,
            "Localized": "W",
            "English": "W"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 70
      },
      "Night": {
        "Icon": 18,
        "IconPhrase": "Rain",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "Occasional rain and drizzle",
        "LongPhrase": "Occasional rain and drizzle",
        "PrecipitationProbability": 54,
        "ThunderstormProbability": 2,
        "RainProbability": 54,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 331,
            "Localized": "NNW",
            "English": "NNW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 16.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 338,
            "Localized": "NNW",
            "English": "NNW"
          }
        },
        "TotalLiquid": {
          "Value": 1.4,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 1.4,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 3,
        "HoursOfRain": 3,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 79
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2020-03-31T07:00:00-04:00",
      "EpochDate": 1585652400,
      "Sun": {
        "Rise": "2020-03-31T06:40:00-04:00",
        "EpochRise": 1585651200,
        "Set": "2020-03-31T19:20:00-04:00",
        "EpochSet": 1585696800
      },
      "Moon": {
        "Rise": "2020-03-31T10:59:00-04:00",
        "EpochRise": 1585666740,
        "Set": "2020-04-01T02:27:00-04:00",
        "EpochSet": 1585722420,
        "Phase": "WaxingCrescent",
        "Age": 7
      },
      "Temperature": {
        "Minimum": {
          "Value": 5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 3.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 3.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.9,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 2,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 8,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 1114,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 21,
          "Category": "Moderate",
          "CategoryValue": 2
        },
        {
          "Name": "UVIndex",
          "Value": 2,
          "Category": "Low",
          "CategoryValue": 1
        }
      ],
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Mostly cloudy",
        "LongPhrase": "Mostly cloudy",
        "PrecipitationProbability": 11,
        "ThunderstormProbability": 2,
        "RainProbability": 11,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 327,
            "Localized": "NNW",
            "English": "NNW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 24.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 314,
            "Localized": "NW",
            "English": "NW"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 87
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Mostly cloudy",
        "LongPhrase": "Mostly cloudy",
        "PrecipitationProbability": 19,
        "ThunderstormProbability": 0,
        "RainProbability": 18,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 7.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 122,
            "Localized": "ESE",
            "English": "ESE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 16.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 81,
            "Localized": "E",
            "English": "E"
          }
        },
        "TotalLiquid": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0,
        "HoursOfRain": 0,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 93
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=5&unit=c&lang=en-us"
    }
  ]
}

export {
  weeklyForecastMockData
}