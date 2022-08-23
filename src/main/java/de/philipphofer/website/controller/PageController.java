package de.philipphofer.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


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

    @GetMapping(".well-known/assetlinks.json")
    public String assetlinks() {
        return "assetlinks.json";
    }

    @GetMapping("/share")
    public String share(@RequestParam String id, Model model) {
        model.addAttribute("id", id);
        return "share";
    }
}
