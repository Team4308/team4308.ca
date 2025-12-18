interface CompetitionResult {
  event: string;
  subpoints?: string[];
}

interface CompetitionYear {
  year: string;
  results: CompetitionResult[];
}

export const competitionData: CompetitionYear[] = [
  {
    year: "2025",
    results: [
      {
        event: "Ontario District - Humber Polytechnic Event - 19th place",
        subpoints: ["Alliance 7 pick 1", "Lost in semifinals(3rd place)"],
      },
      {
        event: "Ontario District - McMaster University - 9th place",
        subpoints: ["Captain of Alliance 6", "Lost in quarterfinals(7-8 place)"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 29th place",
      },
    ]
  },
  {
    year: "2024",
    results: [
      {
        event: "Ontario District - Humber College Event - 12th place",
        subpoints: ["Captain of Alliance 7", "Lost in Quarterfinals(7-8 place)", "Won Excellence in Engineering Award"],
      },
      {
        event: "Ontario District - McMaster University - 19th place",
        subpoints: ["Alliance 7 pick 2", "Lost in Quarterfinals(7-8 place)"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 24th place",
      },
      {
        event: "Ontario District - Overtime Sunday - 23rd",
        subpoints: ["Alliance 1 pick 2", "Won the event(champions)"]
      },
    ]
  },
  {
    year: "2023",
    results: [
      {
        event: "Ontario District - Humber College Event - 26th place",
        subpoints: ["Alliance 3 pick 2", "Eliminated in Semifinals(3-4 place)"],
      },
      {
        event: "Ontario District - Windsor Essex Great Lakes Event - 21st place",
        subpoints: ["Alliance 7 pick 2", "Lost in Quarterfinals(7-8 place)", "Won Team Sustainability Award"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 27th place",
      },
      {
        event: "Ontario District - Overtime Sunday - 16th",
        subpoints: ["Alliance 2 pick 2", "Eliminated in Finals(2nd place)"]
      },
    ]
  },
  {
    year: "2021",
    results: [
      {
        event: "FIRST Innovation Challenge Semi-Finalist Award",
      },
    ],
  },
  {
    year: "2020",
    results: [
      {
        event: "Ontario District - Humber College Event - 16th place",
        subpoints: ["Alliance 8 pick 1", "Eliminated in Quarterfinals (7-8th place)"]
      },
    ],
  },
  {
    year: "2019",
    results: [
      {
        event: "Ontario District - Humber College Event - 16th place",
        subpoints: ["Alliance 2 pick 2", "Eliminated in Quarterfinals (7-8th place)"]
      },
      {
        event: "Ontario District - Ryerson University Event - 28th place",
        subpoints: ["Alliance 5 pick 2", "Eliminated in Semi finals(3-4th place)"]
      },
      {
        event: "Overtime Sunday - 15th place",
        subpoints: ["Alliance 4 pick 1", "Eliminated in Semi finals (3-4th place)"]
      }
    ],
  },
  {
    year: "2018",
    results: [
      {
        event: "Ontario District - Ryerson University Event - 13th place",
        subpoints: ["Alliance 3 pick 2", "Eliminated in Semi finals"],
      },
      {
        event: "Ontario District - McMaster University Event - 26th place",
        subpoints: ["Alliance 3 pick 2", "Finalists (2nd Place)"],
      },
      {
        event: "FIRST Ontario Provincial Championship - Technology Division - 20th place",
        subpoints: ["Alliance 1 pick 2", "Finalists (2nd Place)"],
      },
      {
        event: "FIRST World Championship - Daly Division - 52nd place",
        subpoints: ["Alliance 6 pick 3", "Eliminated in Semi finals (3-4th place)"],
      },
      {
        event: "Fall Fiesta Junior - 15th place",
        subpoints: ["Alliance 2 pick 2"],
      },
      {
        event: "The STEMley Cup Championship - 20th place",
        subpoints: ["Alliance 3 pick 2", "Winners (Champions)"],
      }
    ],
  },
  {
    year: "2017",
    results: [
      {
        event: "Ontario District - Georgian College Event - 27th place",
      },
      {
        event: "Ontario District - Western University, Engineering Event - 25th place",
      },
    ],
  },
  {
    year: "2016",
    results: [
      {
        event: "Greater Toronto East Regional - 25th place",
      },
    ],
  },
  {
    year: "2015",
    results: [
      {
        event: "Waterloo Regional - 12th place",
        subpoints: [
          "Alliance 8 captains",
          "Eliminated in Quarter finals (7–8th place)",
        ],
      },
    ],
  },
  {
    year: "2014",
    results: [
      {
        event: "Greater Toronto West Regional - 12th place",
        subpoints: [
          "Alliance 4 pick 1",
        ],
      },
    ],
  },
  {
    year: "2012",
    results: [
      {
        event: "Greater Toronto West Regional - 55th place",
      },
    ],
  },
]
