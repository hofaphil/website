package de.philipphofer.website.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.nio.file.Files;


@Controller
public class PageController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping(value = "/.well-known/assetlinks.json", produces = MediaType.APPLICATION_JSON_VALUE)
    public String androidWellKnown() {
        return "assetlinks.json";
    }

    @GetMapping(value = "/.well-known/apple-app-site-association", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String appleWellKnown() throws Exception {
        File resource = new ClassPathResource("templates/apple-app-site-association.json").getFile();
        return new String(Files.readAllBytes(resource.toPath()));
    }

    @GetMapping("/share")
    public String share(@RequestParam String id, Model model) {
        model.addAttribute("id", id);
        return "share";
    }
}
