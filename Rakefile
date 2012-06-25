require 'rubygems'
require 'rake'
require 'fileutils'

task :default => :build

desc "Build _site/"
task :build do
  system('jekyll --no-auto')
end

desc "Clean up _site/"
task :clean do
  system('rm -rf _site')
end

desc "Start local server localhost:4000 and continuously build changed files"
task :serve => :clean do
  system('jekyll --server --auto')
end

desc "Draft a new post"
task :new do
  throw "No title given" unless ARGV[1]
    title = ""
    ARGV[1..ARGV.length - 1].each { |v| title += " #{v}" }
    title.strip!
    now = Time.now
    path = "_posts/#{now.strftime('%F')}-#{title.downcase.gsub(/[\s\.]/, '-').gsub(/[^\w\d\-]/, '')}.markdown"

    File.open(path, "w") do |f|
      f.puts "---"
      f.puts "layout: post"
      f.puts "title: #{title}"
      f.puts "description: "
      f.puts "keywords: "
      f.puts "date: #{now.strftime('%F %T')}"
      f.puts "tags:"
      f.puts "  - "
      f.puts "---"
      f.puts ""
      f.puts ""
    end
    
    `subl #{path}`
    exit
end

