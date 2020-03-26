//TODO: add type
const currentWeather: any[] = [
    {
      LocalObservationDateTime: '2020-03-26T15:00:00+02:00',
      EpochTime: 1585227600,
      WeatherText: 'Partly sunny',
      WeatherIcon: 3,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {
          Value: 24.1,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18
        }
      },
      RealFeelTemperature: {
        Metric: {
          Value: 24.9,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 77,
          Unit: 'F',
          UnitType: 18
        }
      },
      RealFeelTemperatureShade: {
        Metric: {
          Value: 22.7,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 73,
          Unit: 'F',
          UnitType: 18
        }
      },
      RelativeHumidity: 42,
      DewPoint: {
        Metric: {
          Value: 10.6,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 51,
          Unit: 'F',
          UnitType: 18
        }
      },
      Wind: {
        Direction: {
          Degrees: 315,
          Localized: 'NW',
          English: 'NW'
        },
        Speed: {
          Metric: {
            Value: 11.1,
            Unit: 'km/h',
            UnitType: 7
          },
          Imperial: {
            Value: 6.9,
            Unit: 'mi/h',
            UnitType: 9
          }
        }
      },
      WindGust: {
        Speed: {
          Metric: {
            Value: 28.2,
            Unit: 'km/h',
            UnitType: 7
          },
          Imperial: {
            Value: 17.5,
            Unit: 'mi/h',
            UnitType: 9
          }
        }
      },
      UVIndex: 3,
      UVIndexText: 'Moderate',
      Visibility: {
        Metric: {
          Value: 16.1,
          Unit: 'km',
          UnitType: 6
        },
        Imperial: {
          Value: 10,
          Unit: 'mi',
          UnitType: 2
        }
      },
      ObstructionsToVisibility: '',
      CloudCover: 38,
      Ceiling: {
        Metric: {
          Value: 2591,
          Unit: 'm',
          UnitType: 5
        },
        Imperial: {
          Value: 8500,
          Unit: 'ft',
          UnitType: 0
        }
      },
      Pressure: {
        Metric: {
          Value: 1006.3,
          Unit: 'mb',
          UnitType: 14
        },
        Imperial: {
          Value: 29.72,
          Unit: 'inHg',
          UnitType: 12
        }
      },
      PressureTendency: {
        LocalizedText: 'Falling',
        Code: 'F'
      },
      Past24HourTemperatureDeparture: {
        Metric: {
          Value: 5.3,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 9,
          Unit: 'F',
          UnitType: 18
        }
      },
      ApparentTemperature: {
        Metric: {
          Value: 23.9,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18
        }
      },
      WindChillTemperature: {
        Metric: {
          Value: 23.9,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 75,
          Unit: 'F',
          UnitType: 18
        }
      },
      WetBulbTemperature: {
        Metric: {
          Value: 15.9,
          Unit: 'C',
          UnitType: 17
        },
        Imperial: {
          Value: 61,
          Unit: 'F',
          UnitType: 18
        }
      },
      Precip1hr: {
        Metric: {
          Value: 0,
          Unit: 'mm',
          UnitType: 3
        },
        Imperial: {
          Value: 0,
          Unit: 'in',
          UnitType: 1
        }
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        PastHour: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        Past3Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        Past6Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        Past9Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        Past12Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        Past18Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        Past24Hours: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        }
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {
              Value: 18.2,
              Unit: 'C',
              UnitType: 17
            },
            Imperial: {
              Value: 65,
              Unit: 'F',
              UnitType: 18
            }
          },
          Maximum: {
            Metric: {
              Value: 24.1,
              Unit: 'C',
              UnitType: 17
            },
            Imperial: {
              Value: 75,
              Unit: 'F',
              UnitType: 18
            }
          }
        },
        Past12HourRange: {
          Minimum: {
            Metric: {
              Value: 10.4,
              Unit: 'C',
              UnitType: 17
            },
            Imperial: {
              Value: 51,
              Unit: 'F',
              UnitType: 18
            }
          },
          Maximum: {
            Metric: {
              Value: 24.1,
              Unit: 'C',
              UnitType: 17
            },
            Imperial: {
              Value: 75,
              Unit: 'F',
              UnitType: 18
            }
          }
        },
        Past24HourRange: {
          Minimum: {
            Metric: {
              Value: 10.4,
              Unit: 'C',
              UnitType: 17
            },
            Imperial: {
              Value: 51,
              Unit: 'F',
              UnitType: 18
            }
          },
          Maximum: {
            Metric: {
              Value: 24.1,
              Unit: 'C',
              UnitType: 17
            },
            Imperial: {
              Value: 75,
              Unit: 'F',
              UnitType: 18
            }
          }
        }
      },
      MobileLink:
        'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
      Link:
        'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
    }
  ]

  export {
    currentWeather
  }