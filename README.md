<p align="center">
    <img 
    src="https://user-images.githubusercontent.com/54945757/129482776-0da89503-e519-4d48-9543-9c0bf271e7bd.png" 
    alt="logo" width="200" height="400" />
</p>
<p align="center" style="font-size:20px">
  A one-stop API solution for all your sporting data
  <br>
  <a 
    href = "https://github.com/lucasace/sportscaster/issues/new?assignees=&labels=&template=bug_report.md&title=%5BBUG%5D">
    Report a bug
  </a> 
  | 
  <a 
    href="https://github.com/lucasace/sportscaster/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFEATURE%5D">
    Request a feature
  </a>
</p>

## About the Project

Sportscaster is a reliable sports API which scrapes data from the most reliable sources 
in the internet and organizes them in a neat and easy to use JSON format.

Reasons why I built this
* There aren't a lot of free sports APIs on the internet
* Scraping data is ridiculously boring and tiresome (Let me do that task for you)

Ofcourse, the API is not complete and I will continue to make it better so 
if you have any issues or want something that is not in the API yet, feel free to raise a issue

A list of sites I scraped for this API are listed in acknowledgements

## Getting Started

The API is very simple to use , all you have to do is know what you want to search for!

A sample is given below, we extract the live football matches of the day

```bash
curl https://sportscaster.herokuapp.com/football/live-matches
```

returns the output in the following

```
[
  {
    "match_type": "matchday 3",
    "match_code": "3594182",
    "teams": [
      {
        "name": "Hallescher FC",
        "code": "hallescher-fc",
        "id": "440"
      },
      {
        "name": "E. Braunschweig",
        "code": "eintracht-braunschweig",
        "id": "23"
      }
    ],
    "match_status": "6:00 PM"
  },
  .
  . 
  .
]
```
and so on

For more requests , kindly visit the [docs](https://lucasace.github.io/sportscaster/)

## Local Development
Visit [Documentation](https://lucasace.github.io/sportscaster/#section/Local-Development)
for Local-Development

## Currently Supported Sports

* Football
* Cricket (in-development)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, 
inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

Note:- Set your PRs towards dev only, any PR set to main will be closed 

## License

Distributed under the Eclipse Public License -v 2.0. See `LICENSE` for more information

## Acknowledgements

1. [Transfermarkt](http://transfermarkt.co.uk/)

