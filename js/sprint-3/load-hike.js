// sprint 3

// all trails data storage for all hikes -- add hikes here
/*
template:
"hike-name": {
park:"Park",
name: "Hike Name",
length: "1.2 miles",
elevationGain: "1,234ft",
style: "Style",
difficulty: "Difficulty",
surface: {surface: 1},
coordinates: {latitude: 0, longitude: 0},
image: ""
},
*/
const hikes = {
    "skyline-loop": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.7865, longitude: -121.7355},
        name: "Skyline Loop",
        length: "5.7 miles",
        elevationGain: "1,784ft",
        style: "Loop",
        difficulty: "Hard", // <-- this is Alltrails difficulty, not our own (ours is more accurate)
        surface: {natural: 45, gravel: 34, paved: 19, steps: 1, wood: 1},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTQxNzUxNjMzL2E1NmY0MDhiOWZiMGE5MGJiNjhlNTAwYmQ0YTg2NjdkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "myrtle-falls": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.7863, longitude: -121.7348},
        name: "Myrtle Falls",
        length: "1 mile",
        elevationGain: "167ft",
        style: "Out and Back",
        difficulty: "Beginner",
        surface: {paved: 95, steps: 5},
        image: "https://www.alltrails.com/api/alltrails/trails/10023187/profile_photo?size=larger_wide"
    },
    "pinnacle-peak": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.7713, longitude: -121.7280},
        name: "Pinnacle Peak",
        length: "3 miles",
        elevationGain: "1,581ft",
        style: "Out and Back",
        difficulty: "Strenuous",
        surface: {natural: 87, unknown: 13},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTI3NzI4NzkyLzg3YTY0ZDAyNTE3NmNhYjEyOGI2MWFkYWMzNTgwZGMxLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "naches-peak-loop": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.9093, longitude: -121.5310},
        name: "Naches Peak Loop",
        length: "3.5 miles",
        elevationGain: "643ft",
        style: "Loop",
        difficulty: "Moderate",
        surface: {natural: 97, unknown: 3},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTMxNjcwMzk4LzdlNDkwZmY1MjY3YTUyZDIyNTJiOTNlMzA3Y2Q2MjMxLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "fremont-lookout": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.9142, longitude: -121.6425},
        name: "Fremont Lookout",
        length: "5.8 miles",
        elevationGain: "1,108ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {natural: 93, unknown: 4, gravel: 3},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNzg4MjcwMjUvNTM1N2ZjNGNmZjcwNjQ3YTc1NTUyMGRiYzkxZTE0ZDguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "burrough-mountain": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.9142, longitude: -121.6425},
        name: "Burrough Mountain",
        length: "8.9 miles",
        elevationGain: "2,467ft",
        style: "Out and Back",
        difficulty: "Hard",
        surface: {natural: 98, gravel: 2},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzAwMjY1ODUvYzk4NTg3YzIzMDg2OTlkMDVjNWM5YmY2ZDBhOGUzMzAuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "high-rock-lookout": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.6857, longitude: -121.9212},
        name: "High Rock Lookout",
        length: "3.4 miles",
        elevationGain: "1,348ft",
        style: "Out and Back",
        difficulty: "Hard",
        terrain: "moderate",
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjEzNTE4MTkvODY5ZDdhYjYyMWQ5MjA0Mzc5N2IzMDVjMjMwNWRkNmYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "narada-falls": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.7823, longitude: -121.7469},
        name: "Narada Falls",
        length: "0.2 miles",
        elevationGain: "78ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {natural: 100},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjM1NTQxOTkvNjlkNjhiMzQ2NDA2NmJmMDI2MmRlMDU0ZWRhNDRhMmEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "nisqually-vista-trail": {
        park:"Mt Rainier",
        coordinates: {latitude: 46.7865, longitude: -121.7355},
        name: "Nisqually Vista Trail",
        length: "1.1 miles",
        elevationGain: "180ft",
        style: "Loop",
        difficulty: "Easy",
        surface: {paved: 99, steps: 1},
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA0Nzc2MDY0L2JlNmUwZDNlMzk2MDA3NWVkOGNkZDY2ZmZkZTIxY2JkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "madison-falls-trail": {
        park:"Olympic",
        coordinates: {latitude: 47.8076, longitude: -123.5933},
        name: "Madison Falls Trail",
        length: "0.2 miles",
        elevationGain: "19ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://www.alltrails.com/mugen/image/explore?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTAyMDEyNTkwLzQyZWU4ZThmYmNhZDdmNmZjY2EzMTgwMGQ4Yjg4OTQyLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6Ijc0NCIsImhlaWdodCI6IjQxOSIsImZpdCI6ImNvdmVyIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19&w=1920&q=75" 
    },
    "devils-punchbowl": {
        park:"Olympic",
        coordinates: {latitude: 48.0578, longitude: -123.7964},
        name: "Devil's Punchbowl",
        length: "2.4 miles",
        elevationGain: "127ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://www.alltrails.com/mugen/image/explore?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA3NjkwOTc5LzE1M2ZmMmE1M2U3ODcyNGY1ZTUwZjA5NDBjNWRlZGZkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19&w=1920&q=75"
    },
    "hurricane-hill": {
        park:"Olympic",
        coordinates: {latitude: 47.9695, longitude: -123.4995},
        name: "Hurricane Hill",
        length: "3.5 miles",
        elevationGain: "823ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA2ODA2MzEwLzJlZWM1NTg5NWU1MGUxMTJlOWY4MjBhZGViZWYxMDgwLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "hall-of-mosses": {
        park:"Olympic",
        coordinates: {latitude: 47.8610, longitude: -123.9341},
        name: "Hall of Mosses",
        length: "1.1 miles",
        elevationGain: "75ft",
        style: "Loop",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEyMzQ1Nzk3L2RjMWY2MjExODQyZDI1ZDA2MDRkZGM5MDIyNTY0YjllLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "rialto-beach-trail": {
        park:"Olympic",
        coordinates: {latitude: 47.9178, longitude: -124.6387},
        name: "Rialto Beach Trail",
        length: "13.1 miles",
        elevationGain: "154ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTI5MTYyMjM3LzM4ZmRkMzcxODU1MjI0ZTU3OTNhYWE5OTUzMjQxYWJiLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "grand-lake": {
        park:"Olympic",
        coordinates: {latitude: 47.9740, longitude: -123.2790},
        name: "Grand Lake",
        length: "7.7 miles",
        elevationGain: "2,427ft",
        style: "Out and Back",
        difficulty: "Hard",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTM5NjY3NzY1LzYxNWJiYjlhZGVhZjUxODk1Yzk5NDk4ZDdmOTIzMDIzLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "mount-storm-king": {
        park:"Olympic",
        coordinates: {latitude: 48.0570, longitude: -123.7970},
        name: "Madison Falls Trail",
        length: "4.4 miles",
        elevationGain: "2,129ft",
        style: "Out and Back",
        difficulty: "Strenuous",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTAxODAyNTQxL2RjY2EzNTI0NTE2MDQ0OThkMGE1MzUwNmJmMmY3MWViLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "mineral-creek-falls": {
        park:"Olympic",
        coordinates: {latitude: 47.4630, longitude: -123.8470},
        name: "Mineral Creek Falls",
        length: "5.6 miles",
        elevationGain: "351ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTAwMjE2MTY3LzU5MGMxZTgxMmQ5MmYzZjg1NmYxODc1ZWJjZTM1NjAyLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "kalaloch-beach": {
        park:"Olympic",
        coordinates: {latitude: 47.6153, longitude: -124.3749},
        name: "Kalaloch Beach",
        length: "3 miles",
        elevationGain: "26ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjIyODc0NDEvYmIwYjUzYmFjODQ0YzQ3YTgyZmJlMWQ4ODgxYjI3MWYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoiMjA0OCIsImhlaWdodCI6IjIwNDgiLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="
    },
    "washington-pass-overlook-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.5180, longitude: -120.6558},
        name: "Washington Pass Overlook Trail",
        length: "0.3 miles",
        elevationGain: "32ft",
        style: "Loop",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA0MDgwNjk0Lzc1MGExMGJkOWQ3ZjFmYTc2ZWZmMGQxODY5MWZiZGZiLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "blue-lake-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.7217, longitude: -120.8046},
        name: "Blue Lake Trail",
        length: "4.6 miles",
        elevationGain: "889ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA4MjA3MDg2LzE1YTIzZjliMmM5ZTI0ZDhkNDc3NDNhYzBiZWEzYzBhLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "rainy-lake-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.5186, longitude: -120.7376},
        name: "Rainy Lake Trail",
        length: "2 miles",
        elevationGain: "68ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTMzMjIyODU0LzE1ODQwZDMwNGJjMTYzMThkMDIxNmRjY2E0ZjhhZTgyLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "maple-pass-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.5168, longitude: -120.7361},
        name: "Maple Pass Trail",
        length: "6.8 miles",
        elevationGain: "2,125ft",
        style: "Loop",
        difficulty: "Hard",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTM1MDkxNzc3LzUzMmRkOGJhMGM5OTQzOWMwZDU4YTQxNDIyZTYwNzkzLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "diablo-lake-overlook": {
        park:"North Cascades",
        coordinates: {latitude: 48.7132, longitude: -121.1077},
        name: "Diablo Lake Overlook",
        length: "0.2 miles",
        elevationGain: "6ft",
        style: "Out and Back",
        difficulty: "Easy",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTM5NTY2NzM5LzEwOGM5ZTNjMzE5NTYwZGY0YTI5ZjM5M2FlODZmY2FkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "diablo-lake-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.7132, longitude: -121.1080},
        name: "Diablo Lake Trail",
        length: "7.5 miles",
        elevationGain: "1,617ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTAxMzY3NjU0L2NlMGRhMmQzNGVjN2JlZmMzMTFiYTQ3MDM1MjI5MGU5LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "sourdough-mountain-lookout": {
        park:"North Cascades",
        coordinates: {latitude: 48.7100, longitude: -121.1080},
        name: "Sourdough Mountain Lookout",
        length: "10.5 miles",
        elevationGain: "5,075ft",
        style: "Out and Back",
        difficulty: "Hard",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTM0MzkzMzc1L2Y4YzM5MjNkNzNiYzgyYjU4YTBiN2Y5MmNkZTc3ZjQ4LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "thornton-lakes-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.6950, longitude: -121.1880},
        name: "Thornton Lakes Trail",
        length: "9.5 miles",
        elevationGain: "2,933ft",
        style: "Out and Back",
        difficulty: "Strenuous",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTI4Nzg0NjI4L2IzODUyNWIwNTkyYzVjOTBjYWFjNGYyM2M3ZDg0ZDRkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "lake-ann-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.8450, longitude: -121.6850},
        name: "Lake Ann Trail",
        length: "3.5 miles",
        elevationGain: "639ft",
        style: "Out and Back",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTM2ODIxNTM5L2UwOWRiZWQ4M2RiZWIxOTI2ZDJjYjdlZWQ0NjU4YjcyLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
    "thunder-knob-trail": {
        park:"North Cascades",
        coordinates: {latitude: 48.7132, longitude: -121.0748},
        name: "Thunder Knob Trail",
        length: "3.3 miles",
        elevationGain: "666ft",
        style: "Loop",
        difficulty: "Moderate",
        surface: {paved: 0, steps: 0}, //placeholder numbers
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTAxMDg1MDQ5L2IxZDk2MDJiODNjMTI2NTNjMDdhOWIzMGMxYTQyM2E2LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6IjIwNDgiLCJoZWlnaHQiOiIyMDQ4IiwiZml0IjoiaW5zaWRlIn0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXNlU2NhbnMiOnRydWUsInF1YW50aXNhdGlvblRhYmxlIjozfX19"
    },
};

// read the "id" value from the browser's URL (e.g. ?id=skyline-loop)
const urlParams = new URLSearchParams(window.location.search);
const hikeId = urlParams.get('id');

// show one hike on the details page
function showHikeDetails() {
    const hike = hikes[hikeId];
    const hikeCard = document.getElementById('hike-card');

    if (!hike) {
        hikeCard.innerHTML = '<h2>Hike not found.</h2>';
        return;
    }

    document.title = hike.name;
    document.getElementById('hikePark').textContent = hike.park;
    document.getElementById('hikeName').textContent = hike.name;
    document.getElementById('hikeLength').textContent = `Length: ${hike.length}`;
    document.getElementById('hikeElevation').textContent = `Elevation Gain: ${hike.elevationGain}`;
    document.getElementById('hikeStyle').textContent = `Style: ${hike.style}`;
    document.getElementById('hikeDifficulty').textContent = `Difficulty: ${hike.difficulty}`;
    document.getElementById('hikeImage').src = hike.image;

    applyDifficultyRating(hikeCard, hike);
    showGuideNotes(hikeId);
}

// load and display saved guide notes for the selected hike
function showGuideNotes(selectedHikeId) {
    const notesList = document.getElementById('guide-notes-list');
    let notes;

    try {
        // read notes saved locally by the guide notes form
        const storedNotes = localStorage.getItem('goodHikesGuideNotes');
        notes = storedNotes ? JSON.parse(storedNotes) : [];

        if (!Array.isArray(notes)) {
            throw new Error('Saved notes are not in the expected format.');
        }
    } catch (error) {
        notesList.textContent = `Unable to load guide notes: ${error.message}`;
        return;
    }

    // keep only valid notes that belong to this hike
    const hikeNotes = notes.filter(function (note) {
        if (!note || typeof note.text !== 'string') {
            return false;
        }

        return note.hikeId === selectedHikeId;
    });

    if (hikeNotes.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'No guide notes have been added for this trail yet.';
        notesList.appendChild(emptyMessage);
        return;
    }

    // add each matching note to the trail page
    hikeNotes.forEach(function (note) {
        const item = document.createElement('li');
        item.textContent = note.text;
        notesList.appendChild(item);
    });
}

// make one hike card for the all-hikes page
function makeHikeCard(hikeId, hike) {
    const card = document.createElement('div');
    card.className = 'hike';

    const title = document.createElement('strong');
    const link = document.createElement('a');
    link.href = `hike-details.html?id=${encodeURIComponent(hikeId)}`;
    link.textContent = hike.name;
    title.appendChild(link);
    card.appendChild(title);

    const park = document.createElement('p');
    park.className = 'park';
    park.textContent = `Park: ${hike.park}`;
    card.appendChild(park);
    
    const length = document.createElement('p');
    length.className = 'length';
    length.textContent = `Length: ${hike.length}`;
    card.appendChild(length);

    const elevation = document.createElement('p');
    elevation.className = 'elevationGain';
    elevation.textContent = `Elevation Gain: ${hike.elevationGain}`;
    card.appendChild(elevation);

    const style = document.createElement('p');
    style.textContent = `Style: ${hike.style}`;
    card.appendChild(style);

    const difficulty = document.createElement('p');
    difficulty.className = 'difficulty';
    card.appendChild(difficulty);

    if (hike.image) {
        const image = document.createElement('img');
        image.src = hike.image;
        image.alt = 'An image of ' + hike.name + '.';
        image.width = 300;
        card.appendChild(image);
    }

    applyDifficultyRating(card, hike);
    return card;
}

// show all hikes on the list page
function showAllHikes() {
    const hikeList = document.querySelector('.hike-list');
    const hikeIds = Object.keys(hikes);

    // create every card first so they can be sorted by their calculated ratings
    const cards = [];
    for (let i = 0; i < hikeIds.length; i++) {
        const hikeId = hikeIds[i];
        cards.push(makeHikeCard(hikeId, hikes[hikeId]));
    }

    // a negative result puts the first card earlier; a positive result puts it later.
    cards.sort(function (firstCard, secondCard) {
        const firstRating = Number(firstCard.getAttribute('data-difficulty-rating'));
        const secondRating = Number(secondCard.getAttribute('data-difficulty-rating'));
        return firstRating - secondRating;
    });

    for (let i = 0; i < cards.length; i++) {
        hikeList.appendChild(cards[i]);
    }
}

// choose what to show based on which page elements are on this page.
const hikeCard = document.getElementById('hike-card');
const hikeList = document.querySelector('.hike-list');

if (hikeCard) {
    showHikeDetails();
} else if (hikeList) {
    showAllHikes();
}
