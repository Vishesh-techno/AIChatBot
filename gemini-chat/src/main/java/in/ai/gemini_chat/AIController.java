package in.ai.gemini_chat;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/chat")
public class AIController {
	
	private final AIService aiService;
	
	@PostMapping("/ask")
	public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload){
		String question = payload.get("question");
		String answer = aiService.getAnswer(question);
		return ResponseEntity.ok(answer);
	}
}
