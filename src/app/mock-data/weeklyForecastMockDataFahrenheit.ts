const weeklyForecastMockDataFahrenheit: any = [
  {
    Headline: {
      EffectiveDate: '2020-04-01T08:00:00+03:00',
      EffectiveEpochDate: 1585717200,
      Severity: 3,
      Text: 'Expect showers Wednesday',
      Category: 'rain',
      EndDate: '2020-04-01T20:00:00+03:00',
      EndEpochDate: 1585760400,
      MobileLink:
        'https://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us',
      Link:
        'https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us'
    },
    DailyForecasts: [
      {
        Date: '2020-04-01T07:00:00+03:00',
        EpochDate: 1585713600,
        Sun: {
          Rise: '2020-04-01T06:29:00+03:00',
          EpochRise: 1585711740,
          Set: '2020-04-01T19:01:00+03:00',
          EpochSet: 1585756860
        },
        Moon: {
          Rise: '2020-04-01T11:46:00+03:00',
          EpochRise: 1585730760,
          Set: '2020-04-02T02:24:00+03:00',
          EpochSet: 1585783440,
          Phase: 'First',
          Age: 8
        },
        Temperature: {
          Minimum: {
            Value: 56,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 67,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 54,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 67,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 54,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 64,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 6.1,
        DegreeDaySummary: {
          Heating: {
            Value: 4,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 50,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Particle Pollution'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 14,
          IconPhrase: 'Partly sunny w/ showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'A couple of showers; cooler',
          LongPhrase:
            'Times of clouds and sun with a couple of showers, mainly early; cooler',
          PrecipitationProbability: 69,
          ThunderstormProbability: 20,
          RainProbability: 69,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 13.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 260,
              Localized: 'W',
              English: 'W'
            }
          },
          WindGust: {
            Speed: {
              Value: 25.3,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 289,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          TotalLiquid: {
            Value: 0.14,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.14,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 2.5,
          HoursOfRain: 2.5,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 54
        },
        Night: {
          Icon: 39,
          IconPhrase: 'Partly cloudy w/ showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Partly cloudy, a shower late',
          LongPhrase: 'Partly cloudy with a passing shower late',
          PrecipitationProbability: 55,
          ThunderstormProbability: 20,
          RainProbability: 55,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 4.6,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 260,
              Localized: 'W',
              English: 'W'
            }
          },
          WindGust: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 284,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          TotalLiquid: {
            Value: 0.02,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.02,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0.5,
          HoursOfRain: 0.5,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 51
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
        Link:
          'https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us'
      },
      {
        Date: '2020-04-02T07:00:00+03:00',
        EpochDate: 1585800000,
        Sun: {
          Rise: '2020-04-02T06:28:00+03:00',
          EpochRise: 1585798080,
          Set: '2020-04-02T19:02:00+03:00',
          EpochSet: 1585843320
        },
        Moon: {
          Rise: '2020-04-02T12:45:00+03:00',
          EpochRise: 1585820700,
          Set: '2020-04-03T03:17:00+03:00',
          EpochSet: 1585873020,
          Phase: 'WaxingGibbous',
          Age: 9
        },
        Temperature: {
          Minimum: {
            Value: 52,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 69,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 52,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 75,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 52,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 66,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 7.8,
        DegreeDaySummary: {
          Heating: {
            Value: 5,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 78,
            Category: 'Moderate',
            CategoryValue: 2,
            Type: 'Particle Pollution'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 8,
            Category: 'Very High',
            CategoryValue: 4
          }
        ],
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
          ShortPhrase: 'Partly sunny',
          LongPhrase: 'Partly sunny',
          PrecipitationProbability: 1,
          ThunderstormProbability: 0,
          RainProbability: 1,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 276,
              Localized: 'W',
              English: 'W'
            }
          },
          WindGust: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 286,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 43
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
          ShortPhrase: 'Mainly clear',
          LongPhrase: 'Mainly clear',
          PrecipitationProbability: 1,
          ThunderstormProbability: 0,
          RainProbability: 1,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 3.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 84,
              Localized: 'E',
              English: 'E'
            }
          },
          WindGust: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 341,
              Localized: 'NNW',
              English: 'NNW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 11
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
        Link:
          'https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us'
      },
      {
        Date: '2020-04-03T07:00:00+03:00',
        EpochDate: 1585886400,
        Sun: {
          Rise: '2020-04-03T06:26:00+03:00',
          EpochRise: 1585884360,
          Set: '2020-04-03T19:02:00+03:00',
          EpochSet: 1585929720
        },
        Moon: {
          Rise: '2020-04-03T13:49:00+03:00',
          EpochRise: 1585910940,
          Set: '2020-04-04T04:04:00+03:00',
          EpochSet: 1585962240,
          Phase: 'WaxingGibbous',
          Age: 10
        },
        Temperature: {
          Minimum: {
            Value: 56,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 72,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 55,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 81,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 55,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 70,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 10.9,
        DegreeDaySummary: {
          Heating: {
            Value: 1,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 59,
            Category: 'Moderate',
            CategoryValue: 2,
            Type: 'Particle Pollution'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 8,
            Category: 'Very High',
            CategoryValue: 4
          }
        ],
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false,
          ShortPhrase: 'Mostly sunny and pleasant',
          LongPhrase: 'Mostly sunny and pleasant',
          PrecipitationProbability: 1,
          ThunderstormProbability: 0,
          RainProbability: 1,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 261,
              Localized: 'W',
              English: 'W'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 327,
              Localized: 'NNW',
              English: 'NNW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 14
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          ShortPhrase: 'Clear',
          LongPhrase: 'Clear',
          PrecipitationProbability: 0,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 69,
              Localized: 'ENE',
              English: 'ENE'
            }
          },
          WindGust: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 30,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 2
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
        Link:
          'https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us'
      },
      {
        Date: '2020-04-04T07:00:00+03:00',
        EpochDate: 1585972800,
        Sun: {
          Rise: '2020-04-04T06:25:00+03:00',
          EpochRise: 1585970700,
          Set: '2020-04-04T19:03:00+03:00',
          EpochSet: 1586016180
        },
        Moon: {
          Rise: '2020-04-04T14:56:00+03:00',
          EpochRise: 1586001360,
          Set: '2020-04-05T04:48:00+03:00',
          EpochSet: 1586051280,
          Phase: 'WaxingGibbous',
          Age: 11
        },
        Temperature: {
          Minimum: {
            Value: 70,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 85,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 91,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 83,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 6.5,
        DegreeDaySummary: {
          Heating: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 12,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 110,
            Category: 'Unhealthy (Sensitive)',
            CategoryValue: 3,
            Type: 'Particle Pollution'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 8,
            Category: 'Very High',
            CategoryValue: 4
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Warmer with some sun',
          LongPhrase: 'Warmer with clouds and sunshine',
          PrecipitationProbability: 0,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 10,
              Localized: 'N',
              English: 'N'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 19,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 51
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Partly cloudy and warm',
          LongPhrase: 'Partly cloudy and warm',
          PrecipitationProbability: 0,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 114,
              Localized: 'ESE',
              English: 'ESE'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 42,
              Localized: 'NE',
              English: 'NE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 85
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
        Link:
          'https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us'
      },
      {
        Date: '2020-04-05T07:00:00+03:00',
        EpochDate: 1586059200,
        Sun: {
          Rise: '2020-04-05T06:24:00+03:00',
          EpochRise: 1586057040,
          Set: '2020-04-05T19:04:00+03:00',
          EpochSet: 1586102640
        },
        Moon: {
          Rise: '2020-04-05T16:06:00+03:00',
          EpochRise: 1586091960,
          Set: '2020-04-06T05:28:00+03:00',
          EpochSet: 1586140080,
          Phase: 'WaxingGibbous',
          Age: 12
        },
        Temperature: {
          Minimum: {
            Value: 61,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 84,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 60,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 88,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 60,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 81,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 5.3,
        DegreeDaySummary: {
          Heating: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 7,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 0,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 8,
            Category: 'Very High',
            CategoryValue: 4
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Clouds and sun',
          LongPhrase: 'Clouds and sun',
          PrecipitationProbability: 2,
          ThunderstormProbability: 0,
          RainProbability: 2,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 234,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 15,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 238,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 64
        },
        Night: {
          Icon: 36,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Partly cloudy and mild',
          LongPhrase: 'Partly cloudy and mild',
          PrecipitationProbability: 4,
          ThunderstormProbability: 0,
          RainProbability: 4,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 218,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 13.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 258,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 57
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'https://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
        Link:
          'https://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us'
      }
    ]
  },
  {
    Headline: {
      EffectiveDate: '2020-05-10T08:00:00+02:00',
      EffectiveEpochDate: 1589090400,
      Severity: 2,
      Text: 'Expect showers Sunday',
      Category: 'rain',
      EndDate: '2020-05-10T20:00:00+02:00',
      EndEpochDate: 1589133600,
      MobileLink:
        'http://m.accuweather.com/en/se/stockholm/314929/extended-weather-forecast/314929?lang=en-us',
      Link:
        'http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?lang=en-us'
    },
    DailyForecasts: [
      {
        Date: '2020-05-06T07:00:00+02:00',
        EpochDate: 1588741200,
        Sun: {
          Rise: '2020-05-06T04:35:00+02:00',
          EpochRise: 1588732500,
          Set: '2020-05-06T20:55:00+02:00',
          EpochSet: 1588791300
        },
        Moon: {
          Rise: '2020-05-06T19:18:00+02:00',
          EpochRise: 1588785480,
          Set: '2020-05-07T05:06:00+02:00',
          EpochSet: 1588820760,
          Phase: 'WaxingGibbous',
          Age: 13
        },
        Temperature: {
          Minimum: {
            Value: 37,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 58,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 33,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 60,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 33,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 56,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 8.8,
        DegreeDaySummary: {
          Heating: {
            Value: 17,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 32,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Periods of clouds and sun',
          LongPhrase: 'Periods of clouds and sun',
          PrecipitationProbability: 7,
          ThunderstormProbability: 0,
          RainProbability: 7,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 271,
              Localized: 'W',
              English: 'W'
            }
          },
          WindGust: {
            Speed: {
              Value: 19.6,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 293,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 55
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Partly cloudy and chilly',
          LongPhrase: 'Partly cloudy and chilly',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 1,
              Localized: 'N',
              English: 'N'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 78,
              Localized: 'ENE',
              English: 'ENE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 39
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=1&lang=en-us',
        Link:
          'http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=1&lang=en-us'
      },
      {
        Date: '2020-05-07T07:00:00+02:00',
        EpochDate: 1588827600,
        Sun: {
          Rise: '2020-05-07T04:32:00+02:00',
          EpochRise: 1588818720,
          Set: '2020-05-07T20:58:00+02:00',
          EpochSet: 1588877880
        },
        Moon: {
          Rise: '2020-05-07T20:58:00+02:00',
          EpochRise: 1588877880,
          Set: '2020-05-08T05:21:00+02:00',
          EpochSet: 1588908060,
          Phase: 'Full',
          Age: 14
        },
        Temperature: {
          Minimum: {
            Value: 37,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 54,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 38,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 54,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 38,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 52,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 7.5,
        DegreeDaySummary: {
          Heating: {
            Value: 19,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 29,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 3,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Intervals of clouds and sun',
          LongPhrase: 'Intervals of clouds and sun',
          PrecipitationProbability: 4,
          ThunderstormProbability: 0,
          RainProbability: 4,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 289,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          WindGust: {
            Speed: {
              Value: 12.7,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 280,
              Localized: 'W',
              English: 'W'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 64
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Partly cloudy and chilly',
          LongPhrase: 'Partly cloudy and chilly',
          PrecipitationProbability: 4,
          ThunderstormProbability: 0,
          RainProbability: 4,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 4.6,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 230,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 254,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 29
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=2&lang=en-us',
        Link:
          'http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=2&lang=en-us'
      },
      {
        Date: '2020-05-08T07:00:00+02:00',
        EpochDate: 1588914000,
        Sun: {
          Rise: '2020-05-08T04:30:00+02:00',
          EpochRise: 1588905000,
          Set: '2020-05-08T21:00:00+02:00',
          EpochSet: 1588964400
        },
        Moon: {
          Rise: '2020-05-08T22:36:00+02:00',
          EpochRise: 1588970160,
          Set: '2020-05-09T05:43:00+02:00',
          EpochSet: 1588995780,
          Phase: 'WaningGibbous',
          Age: 15
        },
        Temperature: {
          Minimum: {
            Value: 40,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 60,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 39,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 62,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 39,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 57,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 9.5,
        DegreeDaySummary: {
          Heating: {
            Value: 15,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 36,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 5,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
          ShortPhrase: 'Partial sunshine',
          LongPhrase: 'Partial sunshine',
          PrecipitationProbability: 11,
          ThunderstormProbability: 0,
          RainProbability: 11,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 180,
              Localized: 'S',
              English: 'S'
            }
          },
          WindGust: {
            Speed: {
              Value: 15,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 195,
              Localized: 'SSW',
              English: 'SSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 44
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Partly cloudy',
          LongPhrase: 'Partly cloudy',
          PrecipitationProbability: 3,
          ThunderstormProbability: 0,
          RainProbability: 3,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 308,
              Localized: 'NW',
              English: 'NW'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 216,
              Localized: 'SW',
              English: 'SW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 47
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=3&lang=en-us',
        Link:
          'http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=3&lang=en-us'
      },
      {
        Date: '2020-05-09T07:00:00+02:00',
        EpochDate: 1589000400,
        Sun: {
          Rise: '2020-05-09T04:27:00+02:00',
          EpochRise: 1588991220,
          Set: '2020-05-09T21:02:00+02:00',
          EpochSet: 1589050920
        },
        Moon: {
          Rise: null,
          EpochRise: null,
          Set: '2020-05-09T05:43:00+02:00',
          EpochSet: 1588995780,
          Phase: 'WaningGibbous',
          Age: 16
        },
        Temperature: {
          Minimum: {
            Value: 40,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 56,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 39,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 56,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 39,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 52,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 7.9,
        DegreeDaySummary: {
          Heating: {
            Value: 17,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 34,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 5,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Partly sunny with a shower',
          LongPhrase: 'Sun and some clouds with a shower in places',
          PrecipitationProbability: 40,
          ThunderstormProbability: 20,
          RainProbability: 40,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 91,
              Localized: 'E',
              English: 'E'
            }
          },
          WindGust: {
            Speed: {
              Value: 12.7,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 88,
              Localized: 'E',
              English: 'E'
            }
          },
          TotalLiquid: {
            Value: 0.02,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.02,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 1,
          HoursOfRain: 1,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 40
        },
        Night: {
          Icon: 38,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Mainly cloudy',
          LongPhrase: 'Mainly cloudy',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 25,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 181,
              Localized: 'S',
              English: 'S'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 110,
              Localized: 'ESE',
              English: 'ESE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 85
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=4&lang=en-us',
        Link:
          'http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=4&lang=en-us'
      },
      {
        Date: '2020-05-10T07:00:00+02:00',
        EpochDate: 1589086800,
        Sun: {
          Rise: '2020-05-10T04:25:00+02:00',
          EpochRise: 1589077500,
          Set: '2020-05-10T21:04:00+02:00',
          EpochSet: 1589137440
        },
        Moon: {
          Rise: '2020-05-10T00:07:00+02:00',
          EpochRise: 1589062020,
          Set: '2020-05-10T06:14:00+02:00',
          EpochSet: 1589084040,
          Phase: 'WaningGibbous',
          Age: 17
        },
        Temperature: {
          Minimum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 51,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 23,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 48,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 23,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 7.3,
        DegreeDaySummary: {
          Heating: {
            Value: 22,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 33,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 3,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 14,
          IconPhrase: 'Partly sunny w/ showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'A couple of showers',
          LongPhrase:
            'Intervals of clouds and sunshine with a couple of showers',
          PrecipitationProbability: 65,
          ThunderstormProbability: 20,
          RainProbability: 65,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 237,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          WindGust: {
            Speed: {
              Value: 16.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 235,
              Localized: 'SW',
              English: 'SW'
            }
          },
          TotalLiquid: {
            Value: 0.16,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.16,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 2.5,
          HoursOfRain: 2.5,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 63
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
          ShortPhrase: 'Mainly clear and chilly',
          LongPhrase: 'Clear to partly cloudy and chilly',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 17,
          SnowProbability: 9,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 295,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          WindGust: {
            Speed: {
              Value: 17.3,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 239,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 21
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=5&lang=en-us',
        Link:
          'http://www.accuweather.com/en/se/stockholm/314929/daily-weather-forecast/314929?day=5&lang=en-us'
      }
    ]
  },
  {
    Headline: {
      EffectiveDate: '2020-05-11T01:00:00+00:00',
      EffectiveEpochDate: 1589158800,
      Severity: 2,
      Text: 'Expect showery weather late Sunday night through Tuesday morning',
      Category: 'rain',
      EndDate: '2020-05-12T13:00:00+00:00',
      EndEpochDate: 1589288400,
      MobileLink:
        'http://m.accuweather.com/en/is/reykjavik/190390/extended-weather-forecast/190390?lang=en-us',
      Link:
        'http://www.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?lang=en-us'
    },
    DailyForecasts: [
      {
        Date: '2020-05-06T07:00:00+00:00',
        EpochDate: 1588748400,
        Sun: {
          Rise: '2020-05-06T04:40:00+00:00',
          EpochRise: 1588740000,
          Set: '2020-05-06T22:10:00+00:00',
          EpochSet: 1588803000
        },
        Moon: {
          Rise: '2020-05-06T20:27:00+00:00',
          EpochRise: 1588796820,
          Set: '2020-05-07T05:26:00+00:00',
          EpochSet: 1588829160,
          Phase: 'WaxingGibbous',
          Age: 13
        },
        Temperature: {
          Minimum: {
            Value: 42,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 47,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 36,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 48,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 36,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 3.4,
        DegreeDaySummary: {
          Heating: {
            Value: 21,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 42,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 1,
            Category: 'Low',
            CategoryValue: 1
          }
        ],
        Day: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Cloudy with a few showers',
          LongPhrase:
            'Considerable cloudiness with a couple of showers, mainly later',
          PrecipitationProbability: 40,
          ThunderstormProbability: 20,
          RainProbability: 40,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 234,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 16.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 260,
              Localized: 'W',
              English: 'W'
            }
          },
          TotalLiquid: {
            Value: 0.02,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.02,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 1,
          HoursOfRain: 1,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 85
        },
        Night: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Mostly cloudy with a shower',
          LongPhrase: 'Rather cloudy with a passing shower',
          PrecipitationProbability: 55,
          ThunderstormProbability: 20,
          RainProbability: 55,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 236,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 12.7,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 257,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          TotalLiquid: {
            Value: 0.05,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.05,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 1,
          HoursOfRain: 1,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 86
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=1&lang=en-us',
        Link:
          'http://www.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=1&lang=en-us'
      },
      {
        Date: '2020-05-07T07:00:00+00:00',
        EpochDate: 1588834800,
        Sun: {
          Rise: '2020-05-07T04:37:00+00:00',
          EpochRise: 1588826220,
          Set: '2020-05-07T22:13:00+00:00',
          EpochSet: 1588889580
        },
        Moon: {
          Rise: '2020-05-07T22:21:00+00:00',
          EpochRise: 1588890060,
          Set: '2020-05-08T05:29:00+00:00',
          EpochSet: 1588915740,
          Phase: 'Full',
          Age: 14
        },
        Temperature: {
          Minimum: {
            Value: 34,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 30,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 30,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 40,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 8.5,
        DegreeDaySummary: {
          Heating: {
            Value: 25,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 41,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'A morning shower; some sun',
          LongPhrase:
            'A morning shower in spots; otherwise, times of clouds and sun',
          PrecipitationProbability: 40,
          ThunderstormProbability: 20,
          RainProbability: 40,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 276,
              Localized: 'W',
              English: 'W'
            }
          },
          WindGust: {
            Speed: {
              Value: 13.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 262,
              Localized: 'W',
              English: 'W'
            }
          },
          TotalLiquid: {
            Value: 0.01,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.01,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0.5,
          HoursOfRain: 0.5,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 63
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
          ShortPhrase: 'Clear to partly cloudy',
          LongPhrase: 'Clear to partly cloudy',
          PrecipitationProbability: 0,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 10,
              Localized: 'N',
              English: 'N'
            }
          },
          WindGust: {
            Speed: {
              Value: 12.7,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 306,
              Localized: 'NW',
              English: 'NW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 25
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=2&lang=en-us',
        Link:
          'http://www.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=2&lang=en-us'
      },
      {
        Date: '2020-05-08T07:00:00+00:00',
        EpochDate: 1588921200,
        Sun: {
          Rise: '2020-05-08T04:34:00+00:00',
          EpochRise: 1588912440,
          Set: '2020-05-08T22:16:00+00:00',
          EpochSet: 1588976160
        },
        Moon: {
          Rise: null,
          EpochRise: null,
          Set: '2020-05-08T05:29:00+00:00',
          EpochSet: 1588915740,
          Phase: 'WaningGibbous',
          Age: 15
        },
        Temperature: {
          Minimum: {
            Value: 32,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 47,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 32,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 49,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 32,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 45,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 16.2,
        DegreeDaySummary: {
          Heating: {
            Value: 25,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 40,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false,
          ShortPhrase: 'Mostly sunny',
          LongPhrase: 'Mostly sunny',
          PrecipitationProbability: 0,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 352,
              Localized: 'N',
              English: 'N'
            }
          },
          WindGust: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 258,
              Localized: 'WSW',
              English: 'WSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 11
        },
        Night: {
          Icon: 33,
          IconPhrase: 'Clear',
          HasPrecipitation: false,
          ShortPhrase: 'Clear and chilly',
          LongPhrase: 'Clear and chilly',
          PrecipitationProbability: 0,
          ThunderstormProbability: 0,
          RainProbability: 0,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 304,
              Localized: 'NW',
              English: 'NW'
            }
          },
          WindGust: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 259,
              Localized: 'W',
              English: 'W'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 0
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=3&lang=en-us',
        Link:
          'http://www.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=3&lang=en-us'
      },
      {
        Date: '2020-05-09T07:00:00+00:00',
        EpochDate: 1589007600,
        Sun: {
          Rise: '2020-05-09T04:30:00+00:00',
          EpochRise: 1588998600,
          Set: '2020-05-09T22:20:00+00:00',
          EpochSet: 1589062800
        },
        Moon: {
          Rise: '2020-05-09T00:15:00+00:00',
          EpochRise: 1588983300,
          Set: '2020-05-09T05:36:00+00:00',
          EpochSet: 1589002560,
          Phase: 'WaningGibbous',
          Age: 16
        },
        Temperature: {
          Minimum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 33,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 48,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 33,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 43,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 10.4,
        DegreeDaySummary: {
          Heating: {
            Value: 25,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 42,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 6,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Increasing cloudiness',
          LongPhrase: 'Increasing cloudiness',
          PrecipitationProbability: 1,
          ThunderstormProbability: 0,
          RainProbability: 1,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 345,
              Localized: 'NNW',
              English: 'NNW'
            }
          },
          WindGust: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 283,
              Localized: 'WNW',
              English: 'WNW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 24
        },
        Night: {
          Icon: 38,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Becoming clear',
          LongPhrase: 'Cloudy in the evening; partly cloudy late',
          PrecipitationProbability: 6,
          ThunderstormProbability: 0,
          RainProbability: 5,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 234,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 11.5,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 277,
              Localized: 'W',
              English: 'W'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 81
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=4&lang=en-us',
        Link:
          'http://www.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=4&lang=en-us'
      },
      {
        Date: '2020-05-10T07:00:00+00:00',
        EpochDate: 1589094000,
        Sun: {
          Rise: '2020-05-10T04:27:00+00:00',
          EpochRise: 1589084820,
          Set: '2020-05-10T22:23:00+00:00',
          EpochSet: 1589149380
        },
        Moon: {
          Rise: '2020-05-10T02:02:00+00:00',
          EpochRise: 1589076120,
          Set: '2020-05-10T05:52:00+00:00',
          EpochSet: 1589089920,
          Phase: 'WaningGibbous',
          Age: 17
        },
        Temperature: {
          Minimum: {
            Value: 42,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 47,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 33,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 44,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 33,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 42,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 6.5,
        DegreeDaySummary: {
          Heating: {
            Value: 21,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 41,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Clouds and sunshine',
          LongPhrase: 'Clouds and sunshine',
          PrecipitationProbability: 5,
          ThunderstormProbability: 0,
          RainProbability: 5,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 216,
              Localized: 'SW',
              English: 'SW'
            }
          },
          WindGust: {
            Speed: {
              Value: 12.7,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 198,
              Localized: 'SSW',
              English: 'SSW'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 67
        },
        Night: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Rain and drizzle late',
          LongPhrase: 'Mostly cloudy with rain and drizzle late',
          PrecipitationProbability: 61,
          ThunderstormProbability: 0,
          RainProbability: 61,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 163,
              Localized: 'SSE',
              English: 'SSE'
            }
          },
          WindGust: {
            Speed: {
              Value: 16.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 146,
              Localized: 'SE',
              English: 'SE'
            }
          },
          TotalLiquid: {
            Value: 0.06,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.06,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 2,
          HoursOfRain: 2,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 79
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=5&lang=en-us',
        Link:
          'http://www.accuweather.com/en/is/reykjavik/190390/daily-weather-forecast/190390?day=5&lang=en-us'
      }
    ]
  },
  {
    Headline: {
      EffectiveDate: '2020-05-09T20:00:00-02:00',
      EffectiveEpochDate: 1589061600,
      Severity: 5,
      Text: 'Rain Saturday night',
      Category: 'rain',
      EndDate: '2020-05-10T08:00:00-02:00',
      EndEpochDate: 1589104800,
      MobileLink:
        'http://m.accuweather.com/en/gl/nuuk/186497/extended-weather-forecast/186497?lang=en-us',
      Link:
        'http://www.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?lang=en-us'
    },
    DailyForecasts: [
      {
        Date: '2020-05-06T07:00:00-02:00',
        EpochDate: 1588755600,
        Sun: {
          Rise: '2020-05-06T04:39:00-02:00',
          EpochRise: 1588747140,
          Set: '2020-05-06T22:10:00-02:00',
          EpochSet: 1588810200
        },
        Moon: {
          Rise: '2020-05-06T20:36:00-02:00',
          EpochRise: 1588804560,
          Set: '2020-05-07T05:25:00-02:00',
          EpochSet: 1588836300,
          Phase: 'WaxingGibbous',
          Age: 13
        },
        Temperature: {
          Minimum: {
            Value: 32,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 39,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 28,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 40,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 28,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 5.8,
        DegreeDaySummary: {
          Heating: {
            Value: 29,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 32,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 21,
          IconPhrase: 'Partly sunny w/ flurries',
          HasPrecipitation: true,
          PrecipitationType: 'Snow',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Clouds and sun with flurries',
          LongPhrase:
            'Intervals of clouds and sunshine with a couple of flurries',
          PrecipitationProbability: 55,
          ThunderstormProbability: 0,
          RainProbability: 40,
          SnowProbability: 44,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 350,
              Localized: 'N',
              English: 'N'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 16,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0.04,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 4,
          HoursOfRain: 0,
          HoursOfSnow: 4,
          HoursOfIce: 0,
          CloudCover: 58
        },
        Night: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Considerable cloudiness',
          LongPhrase: 'Considerable cloudiness',
          PrecipitationProbability: 24,
          ThunderstormProbability: 0,
          RainProbability: 13,
          SnowProbability: 12,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 32,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 20,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 96
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=1&lang=en-us',
        Link:
          'http://www.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=1&lang=en-us'
      },
      {
        Date: '2020-05-07T07:00:00-02:00',
        EpochDate: 1588842000,
        Sun: {
          Rise: '2020-05-07T04:36:00-02:00',
          EpochRise: 1588833360,
          Set: '2020-05-07T22:13:00-02:00',
          EpochSet: 1588896780
        },
        Moon: {
          Rise: '2020-05-07T22:30:00-02:00',
          EpochRise: 1588897800,
          Set: '2020-05-08T05:28:00-02:00',
          EpochSet: 1588922880,
          Phase: 'Full',
          Age: 14
        },
        Temperature: {
          Minimum: {
            Value: 38,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 44,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 37,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 37,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 41,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 9.1,
        DegreeDaySummary: {
          Heating: {
            Value: 24,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 17,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 4,
            Category: 'Moderate',
            CategoryValue: 2
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Times of clouds and sun',
          LongPhrase: 'Intervals of clouds and sunshine',
          PrecipitationProbability: 3,
          ThunderstormProbability: 0,
          RainProbability: 3,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 19,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 16,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 51
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Patchy clouds',
          LongPhrase: 'Patchy clouds',
          PrecipitationProbability: 2,
          ThunderstormProbability: 0,
          RainProbability: 2,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 4.6,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 96,
              Localized: 'E',
              English: 'E'
            }
          },
          WindGust: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 175,
              Localized: 'S',
              English: 'S'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 45
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=2&lang=en-us',
        Link:
          'http://www.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=2&lang=en-us'
      },
      {
        Date: '2020-05-08T07:00:00-02:00',
        EpochDate: 1588928400,
        Sun: {
          Rise: '2020-05-08T04:32:00-02:00',
          EpochRise: 1588919520,
          Set: '2020-05-08T22:16:00-02:00',
          EpochSet: 1588983360
        },
        Moon: {
          Rise: null,
          EpochRise: null,
          Set: '2020-05-08T05:28:00-02:00',
          EpochSet: 1588922880,
          Phase: 'WaningGibbous',
          Age: 15
        },
        Temperature: {
          Minimum: {
            Value: 39,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 45,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 47,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 4.1,
        DegreeDaySummary: {
          Heating: {
            Value: 23,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 19,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 2,
            Category: 'Low',
            CategoryValue: 1
          }
        ],
        Day: {
          Icon: 6,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Rather cloudy',
          LongPhrase: 'Rather cloudy',
          PrecipitationProbability: 17,
          ThunderstormProbability: 0,
          RainProbability: 17,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 4.6,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 133,
              Localized: 'SE',
              English: 'SE'
            }
          },
          WindGust: {
            Speed: {
              Value: 8.1,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 174,
              Localized: 'S',
              English: 'S'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 94
        },
        Night: {
          Icon: 36,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Turning out clear',
          LongPhrase: 'Turning out clear',
          PrecipitationProbability: 5,
          ThunderstormProbability: 0,
          RainProbability: 5,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 25,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 353,
              Localized: 'N',
              English: 'N'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 59
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=3&lang=en-us',
        Link:
          'http://www.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=3&lang=en-us'
      },
      {
        Date: '2020-05-09T07:00:00-02:00',
        EpochDate: 1589014800,
        Sun: {
          Rise: '2020-05-09T04:29:00-02:00',
          EpochRise: 1589005740,
          Set: '2020-05-09T22:19:00-02:00',
          EpochSet: 1589069940
        },
        Moon: {
          Rise: '2020-05-09T00:24:00-02:00',
          EpochRise: 1588991040,
          Set: '2020-05-09T05:35:00-02:00',
          EpochSet: 1589009700,
          Phase: 'WaningGibbous',
          Age: 16
        },
        Temperature: {
          Minimum: {
            Value: 40,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 35,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 43,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 6.2,
        DegreeDaySummary: {
          Heating: {
            Value: 22,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 28,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 2,
            Category: 'Low',
            CategoryValue: 1
          }
        ],
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
          ShortPhrase: 'Times of clouds and sun',
          LongPhrase: 'Times of clouds and sun',
          PrecipitationProbability: 4,
          ThunderstormProbability: 0,
          RainProbability: 4,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 77,
              Localized: 'ENE',
              English: 'ENE'
            }
          },
          WindGust: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 42,
              Localized: 'NE',
              English: 'NE'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 63
        },
        Night: {
          Icon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Occasional rain and drizzle',
          LongPhrase: 'Occasional rain and drizzle',
          PrecipitationProbability: 53,
          ThunderstormProbability: 0,
          RainProbability: 53,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 66,
              Localized: 'ENE',
              English: 'ENE'
            }
          },
          WindGust: {
            Speed: {
              Value: 9.2,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 43,
              Localized: 'NE',
              English: 'NE'
            }
          },
          TotalLiquid: {
            Value: 0.05,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.05,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 3,
          HoursOfRain: 3,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 77
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=4&lang=en-us',
        Link:
          'http://www.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=4&lang=en-us'
      },
      {
        Date: '2020-05-10T07:00:00-02:00',
        EpochDate: 1589101200,
        Sun: {
          Rise: '2020-05-10T04:26:00-02:00',
          EpochRise: 1589091960,
          Set: '2020-05-10T22:23:00-02:00',
          EpochSet: 1589156580
        },
        Moon: {
          Rise: '2020-05-10T02:10:00-02:00',
          EpochRise: 1589083800,
          Set: '2020-05-10T05:52:00-02:00',
          EpochSet: 1589097120,
          Phase: 'WaningGibbous',
          Age: 17
        },
        Temperature: {
          Minimum: {
            Value: 38,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Minimum: {
            Value: 31,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 45,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperatureShade: {
          Minimum: {
            Value: 31,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 46,
            Unit: 'F',
            UnitType: 18
          }
        },
        HoursOfSun: 1.7,
        DegreeDaySummary: {
          Heating: {
            Value: 23,
            Unit: 'F',
            UnitType: 18
          },
          Cooling: {
            Value: 0,
            Unit: 'F',
            UnitType: 18
          }
        },
        AirAndPollen: [
          {
            Name: 'AirQuality',
            Value: 30,
            Category: 'Good',
            CategoryValue: 1,
            Type: 'Ozone'
          },
          {
            Name: 'Grass',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Mold',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Ragweed',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'Tree',
            Value: 0,
            Category: 'Low',
            CategoryValue: 1
          },
          {
            Name: 'UVIndex',
            Value: 1,
            Category: 'Low',
            CategoryValue: 1
          }
        ],
        Day: {
          Icon: 7,
          IconPhrase: 'Cloudy',
          HasPrecipitation: false,
          ShortPhrase: 'Cloudy',
          LongPhrase: 'Cloudy',
          PrecipitationProbability: 25,
          ThunderstormProbability: 0,
          RainProbability: 25,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 6.9,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 146,
              Localized: 'SE',
              English: 'SE'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 88,
              Localized: 'E',
              English: 'E'
            }
          },
          TotalLiquid: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 0,
          HoursOfRain: 0,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 96
        },
        Night: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
          ShortPhrase: 'Cloudy with a little rain',
          LongPhrase: 'Cloudy with a little rain',
          PrecipitationProbability: 55,
          ThunderstormProbability: 0,
          RainProbability: 55,
          SnowProbability: 0,
          IceProbability: 0,
          Wind: {
            Speed: {
              Value: 5.8,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 20,
              Localized: 'NNE',
              English: 'NNE'
            }
          },
          WindGust: {
            Speed: {
              Value: 10.4,
              Unit: 'mi/h',
              UnitType: 9
            },
            Direction: {
              Degrees: 74,
              Localized: 'ENE',
              English: 'ENE'
            }
          },
          TotalLiquid: {
            Value: 0.04,
            Unit: 'in',
            UnitType: 1
          },
          Rain: {
            Value: 0.04,
            Unit: 'in',
            UnitType: 1
          },
          Snow: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          Ice: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          },
          HoursOfPrecipitation: 2,
          HoursOfRain: 2,
          HoursOfSnow: 0,
          HoursOfIce: 0,
          CloudCover: 93
        },
        Sources: ['AccuWeather'],
        MobileLink:
          'http://m.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=5&lang=en-us',
        Link:
          'http://www.accuweather.com/en/gl/nuuk/186497/daily-weather-forecast/186497?day=5&lang=en-us'
      }
    ]
  }
]
export { weeklyForecastMockDataFahrenheit }
