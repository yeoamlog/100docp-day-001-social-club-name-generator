import random


def build_name_options(city: str, vibe: str, hobby: str) -> list[str]:
    return [
        f"The {vibe} {hobby} Project",
        f"{city} {hobby} Union",
        f"{hobby} {vibe} Lab",
        f"{city} {vibe} Sanctuary",
        f"{city} {vibe} {hobby} Club",
        f"The {vibe} {hobby} of {city}",
        f"{city} {hobby} {vibe} Society",
        f"{vibe} {hobby} {city} Collective",
    ]


def main() -> None:
    print("--- Welcome to the Social Club Name Generator ---")
    city = input("Where is your crew meeting up? (City): \n").strip()
    vibe = input("What is the overall vibe? (Chill/Wild/Intellectual): \n").strip()
    hobby = input("What's a hobby you're personally obsessed with?: \n").strip()

    if not city or not vibe or not hobby:
        print("\nPlease fill in all three inputs.")
        return

    choice = random.choice(build_name_options(city, vibe, hobby)).title()
    print(f"\nRecommended Name: {choice}")


if __name__ == "__main__":
    main()
