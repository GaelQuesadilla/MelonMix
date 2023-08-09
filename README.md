# MelonMix

My Project
MelonMix is a cloud-based music player that allows users to listen to music hosted on their own servers using Django on the server's backend and React on the frontend for a smooth user experience.

# Features

- [x] Cloud music hosting
- [ ] Music player
- [ ] Playlist creation

# Installation

Please note that this project is still under development, so you may encounter some errors. Feel free to report them.

1. Clone the repository

```bash
git clone https://github.com/GaelQuesadilla/spotifyClone.git
cd melonmix
```

2. Set up the virtual environment and Django dependencies.

```bash
pip install -r requirements.txt
```

2. Configure React dependencies and build the frontend.

```bash
cd frontend
npm install
npm run build
```

4. Run the Django development server.

```bach
python manage.py runserver
```

# Add Music

If you wish to automatically add music, follow these steps to set up and load songs into the application.

## Initial setup

1. Create a file named .env in the project root if it doesn't exist.

2. Open the .env file and add the following line, replacing C:\your\music\directory with the full path to the directory containing the songs you want to add.

```env
INITIAL_MUSIC_DIR =  C:\your\music\directory
```

Make sure the path is correctly written and there are no extra spaces.

## File Format

It's crucial that the songs are in .mp3 format and the files follow a specific naming convention: artist-title.mp3. This will ensure that the song details are captured accurately in the application.

## Data Loading

Once you've set up the folder with songs and adjusted the .env file, you can load the song data into the application using the following command:

```bat
python manage.py load_audio_data
```

Once you've set up the folder with songs and adjusted the .env file, you can load the song data into the application using the following command:

# Contact

If you have any questions, suggestions, or just want to say hello, you can reach me at: gaeldev032@gmail.com
