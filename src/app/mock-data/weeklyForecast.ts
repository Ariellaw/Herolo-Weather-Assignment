
const weeklyForecastMockData: any={
  "Headline": {
    "EffectiveDate": "2020-04-01T08:00:00+03:00",
    "EffectiveEpochDate": 1585717200,
    "Severity": 3,
    "Text": "Expect showers Wednesday",
    "Category": "rain",
    "EndDate": "2020-04-01T20:00:00+03:00",
    "EndEpochDate": 1585760400,
    "MobileLink": "https://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
    "Link": "https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2020-04-01T07:00:00+03:00",
      "EpochDate": 1585713600,
      "Sun": {
        "Rise": "2020-04-01T06:29:00+03:00",
        "EpochRise": 1585711740,
        "Set": "2020-04-01T19:01:00+03:00",
        "EpochSet": 1585756860
      },
      "Moon": {
        "Rise": "2020-04-01T11:46:00+03:00",
        "EpochRise": 1585730760,
        "Set": "2020-04-02T02:24:00+03:00",
        "EpochSet": 1585783440,
        "Phase": "First",
        "Age": 8
      },
      "Temperature": {
        "Minimum": {
          "Value": 13.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 19.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 12.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 19.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 12.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 17.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 6.1,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 2,
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
          "Value": 50,
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
          "Name": "Tree",
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
        "Icon": 14,
        "IconPhrase": "Partly sunny w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "A couple of showers; cooler",
        "LongPhrase": "Times of clouds and sun with a couple of showers, mainly early; cooler",
        "PrecipitationProbability": 69,
        "ThunderstormProbability": 20,
        "RainProbability": 69,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 22.2,
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
            "Value": 40.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 289,
            "Localized": "WNW",
            "English": "WNW"
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
        "HoursOfPrecipitation": 2.5,
        "HoursOfRain": 2.5,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 54
      },
      "Night": {
        "Icon": 39,
        "IconPhrase": "Partly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "Partly cloudy, a shower late",
        "LongPhrase": "Partly cloudy with a passing shower late",
        "PrecipitationProbability": 55,
        "ThunderstormProbability": 20,
        "RainProbability": 55,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 7.4,
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
            "Value": 18.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 284,
            "Localized": "WNW",
            "English": "WNW"
          }
        },
        "TotalLiquid": {
          "Value": 0.5,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0.5,
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
        "HoursOfPrecipitation": 0.5,
        "HoursOfRain": 0.5,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 51
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      "Link": "https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2020-04-02T07:00:00+03:00",
      "EpochDate": 1585800000,
      "Sun": {
        "Rise": "2020-04-02T06:28:00+03:00",
        "EpochRise": 1585798080,
        "Set": "2020-04-02T19:02:00+03:00",
        "EpochSet": 1585843320
      },
      "Moon": {
        "Rise": "2020-04-02T12:45:00+03:00",
        "EpochRise": 1585820700,
        "Set": "2020-04-03T03:17:00+03:00",
        "EpochSet": 1585873020,
        "Phase": "WaxingGibbous",
        "Age": 9
      },
      "Temperature": {
        "Minimum": {
          "Value": 10.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 20.4,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 10.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 23.8,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 10.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 18.9,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 7.8,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 2,
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
          "Value": 78,
          "Category": "Moderate",
          "CategoryValue": 2,
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
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 8,
          "Category": "Very High",
          "CategoryValue": 4
        }
      ],
      "Day": {
        "Icon": 3,
        "IconPhrase": "Partly sunny",
        "HasPrecipitation": false,
        "ShortPhrase": "Partly sunny",
        "LongPhrase": "Partly sunny",
        "PrecipitationProbability": 1,
        "ThunderstormProbability": 0,
        "RainProbability": 1,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 276,
            "Localized": "W",
            "English": "W"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 18.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 286,
            "Localized": "WNW",
            "English": "WNW"
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
        "CloudCover": 43
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false,
        "ShortPhrase": "Mainly clear",
        "LongPhrase": "Mainly clear",
        "PrecipitationProbability": 1,
        "ThunderstormProbability": 0,
        "RainProbability": 1,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 5.6,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 84,
            "Localized": "E",
            "English": "E"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 13,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 341,
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
        "CloudCover": 11
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      "Link": "https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2020-04-03T07:00:00+03:00",
      "EpochDate": 1585886400,
      "Sun": {
        "Rise": "2020-04-03T06:26:00+03:00",
        "EpochRise": 1585884360,
        "Set": "2020-04-03T19:02:00+03:00",
        "EpochSet": 1585929720
      },
      "Moon": {
        "Rise": "2020-04-03T13:49:00+03:00",
        "EpochRise": 1585910940,
        "Set": "2020-04-04T04:04:00+03:00",
        "EpochSet": 1585962240,
        "Phase": "WaxingGibbous",
        "Age": 10
      },
      "Temperature": {
        "Minimum": {
          "Value": 13.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 22.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 13,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 27.2,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 13,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 21.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 10.9,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 0,
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
          "Value": 59,
          "Category": "Moderate",
          "CategoryValue": 2,
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
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 8,
          "Category": "Very High",
          "CategoryValue": 4
        }
      ],
      "Day": {
        "Icon": 2,
        "IconPhrase": "Mostly sunny",
        "HasPrecipitation": false,
        "ShortPhrase": "Mostly sunny and pleasant",
        "LongPhrase": "Mostly sunny and pleasant",
        "PrecipitationProbability": 1,
        "ThunderstormProbability": 0,
        "RainProbability": 1,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 9.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 261,
            "Localized": "W",
            "English": "W"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 16.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 327,
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
        "CloudCover": 14
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false,
        "ShortPhrase": "Clear",
        "LongPhrase": "Clear",
        "PrecipitationProbability": 0,
        "ThunderstormProbability": 0,
        "RainProbability": 0,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 9.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 69,
            "Localized": "ENE",
            "English": "ENE"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 14.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 30,
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
        "CloudCover": 2
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      "Link": "https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2020-04-04T07:00:00+03:00",
      "EpochDate": 1585972800,
      "Sun": {
        "Rise": "2020-04-04T06:25:00+03:00",
        "EpochRise": 1585970700,
        "Set": "2020-04-04T19:03:00+03:00",
        "EpochSet": 1586016180
      },
      "Moon": {
        "Rise": "2020-04-04T14:56:00+03:00",
        "EpochRise": 1586001360,
        "Set": "2020-04-05T04:48:00+03:00",
        "EpochSet": 1586051280,
        "Phase": "WaxingGibbous",
        "Age": 11
      },
      "Temperature": {
        "Minimum": {
          "Value": 21.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 29.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 19.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 32.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 19.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 28.2,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 6.5,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 110,
          "Category": "Unhealthy (Sensitive)",
          "CategoryValue": 3,
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
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 8,
          "Category": "Very High",
          "CategoryValue": 4
        }
      ],
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "ShortPhrase": "Warmer with some sun",
        "LongPhrase": "Warmer with clouds and sunshine",
        "PrecipitationProbability": 0,
        "ThunderstormProbability": 0,
        "RainProbability": 0,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 9.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 10,
            "Localized": "N",
            "English": "N"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 16.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 19,
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
        "CloudCover": 51
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false,
        "ShortPhrase": "Partly cloudy and warm",
        "LongPhrase": "Partly cloudy and warm",
        "PrecipitationProbability": 0,
        "ThunderstormProbability": 0,
        "RainProbability": 0,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 9.3,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 114,
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
            "Degrees": 42,
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
        "CloudCover": 85
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      "Link": "https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2020-04-05T07:00:00+03:00",
      "EpochDate": 1586059200,
      "Sun": {
        "Rise": "2020-04-05T06:24:00+03:00",
        "EpochRise": 1586057040,
        "Set": "2020-04-05T19:04:00+03:00",
        "EpochSet": 1586102640
      },
      "Moon": {
        "Rise": "2020-04-05T16:06:00+03:00",
        "EpochRise": 1586091960,
        "Set": "2020-04-06T05:28:00+03:00",
        "EpochSet": 1586140080,
        "Phase": "WaxingGibbous",
        "Age": 12
      },
      "Temperature": {
        "Minimum": {
          "Value": 16,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 28.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 15.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 31.3,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 15.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 27.1,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "HoursOfSun": 5.3,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 4,
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
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 8,
          "Category": "Very High",
          "CategoryValue": 4
        }
      ],
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "ShortPhrase": "Clouds and sun",
        "LongPhrase": "Clouds and sun",
        "PrecipitationProbability": 2,
        "ThunderstormProbability": 0,
        "RainProbability": 2,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 14.8,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 234,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 24.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 238,
            "Localized": "WSW",
            "English": "WSW"
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
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "ShortPhrase": "Partly cloudy and mild",
        "LongPhrase": "Partly cloudy and mild",
        "PrecipitationProbability": 4,
        "ThunderstormProbability": 0,
        "RainProbability": 4,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 11.1,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 218,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 22.2,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 258,
            "Localized": "WSW",
            "English": "WSW"
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
        "CloudCover": 57
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      "Link": "https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    }
  ]
}

export { weeklyForecastMockData }
